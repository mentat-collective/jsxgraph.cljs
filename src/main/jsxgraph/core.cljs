(ns jsxgraph.core
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require ["@mentatcollective/jsxgraph" :default jsx]
            [reagent.core :as re :include-macros true]))

;; Utilities

(defn to-fixed [x p]
  (.toFixed jsx x p))

;; TODO extract various event handlers and attached
;;
;; TODO probably ALSO switch the order so that props always come first, THEN parents.

;; Components

(defn JSXGraph
  "TODO note that you can either add children etc... OR you can supply a ref that
  just does all of this crap for you.

  TODO can I have a component that just messes with the board itself?"
  [{:keys [id style]} & _]
  (let [!board  (re/atom nil)
        !force  (atom 0)
        id (or id (-> (Math/random)
                      (.toString 36)
                      (.substr 2 9)))
        style (or style {:height "400px" :width "100%"})
        kill! (fn [board]
                (.suspendUpdate board)
                (-> (.-JSXGraph jsx) (.freeBoard board))
                nil)
        init! (fn [props]
                (let [board (-> (.-JSXGraph jsx)
                                (.initBoard id (clj->js props)))]
                  ;; initialize.
                  (when-let [ref (:ref props)]
                    (ref board))
                  board))]
    (re/create-class
     {:display-name  "JSXGraph"

      ;;called after render.
      :component-did-mount
      (fn [this]
        (js/console.log "board mounted")
        (reset! !board (init! (re/props this))))

      :component-will-unmount
      (fn [_this]
        (js/console.log "bye bye board")
        (swap! !board kill!))

      ;; Update if the props change. Not so bad!!
      :component-did-update
      (fn [this old-argv]
        (js/console.log "board-did-update")
        (let [old-props (let [p (second old-argv)]
                          (if (map? p) p {}))
              new-props (or (re/props this) {})]
          (when-not (= old-props new-props)
            (js/console.log (str "board resetting!"))
            (swap! !board (fn [old-board]
                            (when old-board (kill! old-board))
                            (init! new-props))))))

      :reagent-render
      (fn [& _]
        (let [this     (re/current-component)
              children (re/children this)
              extras   {:board @!board :force @!force}]
          (js/console.log "rendering board")
          ;; TODO note that this trick is forcing the children to re-render
          ;; basically every single time. We are using react as a hack here :)
          ;;
          ;; But this means that, for now, you can't be updating this stuff with
          ;; changing properties. You need to use a function that is going to
          ;; access some state. That should be fine!
          (swap! !force inc)
          (into [:div {:id id :style style}]
                (map
                 (fn [[a props & more]]
                   (if (map? props)
                     (into [a (into props extras)] more)
                     (into [a extras props] more))))
                children)))})))

(defn add-item! [name board elems props]
  (let [p (.create board
                   name
                   (clj->js elems)
                   (clj->js (dissoc props :board)))]
    ;; Okay, SO, we can definitely get updates. but we want to UNREGISTER these
    ;; if we can when the element gets taken out of commission.
    #_(if-let [coords (.-coords p)]
        (.on coords "update" (fn [_] (js/console.log (str (pr-str props) name " coords update fired"))))
        (.on board "update" (fn [_] (js/console.log (str (.getType p) " update fired")))))

    ;; TODO what are the possible events for OTHER types??
    (when-let [f (props :on-drag)]

      ;; events can be
      ;; drag, mousedrag, touchdrag
      ;; move, mousemove, touchmove
      ;; over, mouseover
      ;; out, mouseout
      ;; up, mouseup, touchend
      ;; down, mousedown, touchstart
      (.on p "drag" (fn [_]
                      (this-as point
                        (f point)))))
    p))

(defn element [name]
  (fn [_props _elems]
    (let [!item (atom nil)
          mount!
          (fn [this _old-argv]
            (let [[_ props elems] (re/argv this)]
              (when-let [board (:board props)]
                (swap! !item
                       (fn [item]
                         (when item
                           (.removeObject board item))
                         (add-item! name board elems props))))))]
      (re/create-class
       {:display-name name
        :component-did-mount mount!
        :component-did-update mount!
        :component-will-unmount
        (fn [this]
          (let [[_ props] (re/argv this)]
            (when-let [board (:board props)]
              (swap! !item
                     (fn [item]
                       (when item
                         (.removeObject board item))
                       nil)))))
        :reagent-render
        (fn [_props _elems] nil)}))))

;; ## Elements
;;
;; see `ElementType` in index.d.ts.

(def Angle (element "angle"))
(def Arc (element "arc"))
(def Arrow (element "arrow"))
(def ArrowParallel (element "arrowparallel"))
(def Axis (element "axis"))
(def Bisector (element "bisector"))
(def Bisectorlines (element "bisectorlines"))
(def Boxplot (element "boxplot"))
(def Button (element "button"))
(def CardinalSpline (element "cardinalspline"))
(def Chart (element "chart"))
(def Checkbox (element "checkbox"))
(def Circle (element "circle"))
(def Circumcenter (element "circumcenter"))
(def Circumcircle (element "circumcircle"))
(def CircumcircleArc (element "circumcirclearc"))
(def CircumcircleSector (element "circumcirclesector"))
(def Comb (element "comb"))
(def Conic (element "conic"))
(def Curve (element "curve"))
(def Curve3D (element "Curve3d"))
(def CurveDifference (element "curvedifference"))
(def CurveIntersection (element "curveintersection"))
(def CurveUnion (element "curveunion"))
(def Derivative (element "derivative"))
(def Ellipse (element "ellipse"))
(def ForeignObject (element "foreignobject"))
(def FunctionGraph (element "functiongraph"))
(def FunctionGraph3D (element "functiongraph3d"))
(def Glider (element "glider"))
(def Grid (element "grid"))
(def Group (element "group"))
(def Hatch (element "hatch"))
(def Hyperbola (element "hyperbola"))
(def Image (element "image"))
(def Incenter (element "incenter"))
(def Incircle (element "incircle"))
(def Inequality (element "inequality"))
(def Input (element "input"))
(def Integral (element "integral"))
(def Intersection (element "intersection"))
(def Label (element "label"))
(def Legend (element "legend"))
(def Line (element "line"))
(def Line3D (element "Line3d"))
(def Locus (element "locus"))
(def MajorArc (element "majorarc"))
(def MajorSector (element "majorsector"))
(def MetapostSpline (element "metapostspline"))
(def Midpoint (element "midpoint"))
(def MinorArc (element "minorarc"))
(def MinorSector (element "minorsector"))
(def MirrorElement (element "mirrorelement"))
(def MirrorPoint (element "mirrorpoint"))
(def NonReflexAngle (element "nonreflexangle"))
(def Normal (element "normal"))
(def OrthogonalProjection (element "orthogonalprojection"))
(def OtherIntersection (element "otherintersection"))
(def Parabola (element "parabola"))
(def Parallel (element "parallel"))
(def ParallelPoint (element "parallelpoint"))
(def ParametricSurface3D (element "parametricsurface3d"))
(def Perpendicular (element "perpendicular"))
(def PerpendicularPoint (element "perpendicularpoint"))
(def PerpendicularSegment (element "perpendicularsegment"))
(def Point (element "point"))
(def Point3D (element "point3d"))
(def PolarLine (element "polarline"))
(def PolePoint (element "polepoint"))
(def Polygon (element "polygon"))
(def PolygonalChain (element "polygonalchain"))
(def RadicalAxis (element "padicalaxis"))
(def Reflection (element "reflection"))
(def ReflexAngle (element "reflexangle"))
(def RegularPolygon (element "regularpolygon"))
(def RiemannSum (element "riemannsum"))
(def Sector (element "sector"))
(def Segment (element "segment"))
(def Semicircle (element "semicircle"))
(def Slider (element "slider"))
(def SlopeTriangle (element "slopetriangle"))
(def Spline (element "spline"))
(def StepFunction (element "stepfunction"))
(def Tangent (element "tangent"))
(def TapeMeasure (element "tapemeasure"))
(def Text (element "text"))
(def Ticks (element "ticks"))
(def TraceCurve (element "tracecurve"))
(def Transformation (element "transformation"))
(def Turtle (element "turtle"))
(def View3D (element "view3D"))

;; ## Extensions
;;
;; TODO handle :<> in the children update for the board?? otherwise we can't use
;; that without this trick.

(defn Multi [{:keys [n] :or {n 1} :as m} i->c]
  (letfn [(f [i]
            (let [[component props & more] (i->c i)]
              (into [component (into m props)] more)))]
    (into [:<>] (map f) (range n))))

(defn PointLine
  "Annoyingly, if you want to make NEW components that wrap the others, you need
  to be careful about passing along props down the line.

  ```
  [jsx/PointLine {} 3]
  ```"
  [props x]
  (letfn [(f [i]
            [Point [(- i) i] (assoc props :name (str i) :strokecolor "red")])]
    (into [:<>] (map f) (range x))))

;; TODO
;;
;; - add jsxgraph prefix to my special keywords like board, etc so they don't clash, counter too.
;; - document the madness
;; - rebuild one of the Sam Zhang essays using mathbox and jsxgraph. Get some!