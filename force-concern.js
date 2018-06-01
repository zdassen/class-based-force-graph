/**
 *
 * force-concern.js
 *
 */
class ForceConcern extends Force {

  /* コンストラクタ */
  constructor(...args) {
    super(...args);

    // クリック時の処理を登録する
    this.setOnClickCircle();

  }

  /* ノード ( circle 要素) の色を設定する */
  setNodeColor(node) {
    if (node.is_root) return "#eb6101";
    else return "teal";
  }

  /* ラベル ( text 要素 ) の値を設定する */
  setLabel(d) { return d.content; }

  /* ノード ( circle 要素 ) クリック時の動作を登録する */
  setOnClickCircle() {

    this.circles.on("click", (e) => {

      // Concern の ID
      let concernId = 
        document.getElementById("id_concern").value;

      // クリックしたノードの ID
      let nodeId = e.nid;

      // ノード作成ページに移動する
      location.href = 
        `/nodes1/nodes/new/?cid=${concernId}&nid=${nodeId}`;

    });

  }

}