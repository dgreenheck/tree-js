var Q = Object.defineProperty;
var z = (p, u, e) => u in p ? Q(p, u, { enumerable: !0, configurable: !0, writable: !0, value: e }) : p[u] = e;
var w = (p, u, e) => (z(p, typeof u != "symbol" ? u + "" : u, e), e);
import * as t from "three";
class S {
  constructor(u) {
    w(this, "m_w", 123456789);
    w(this, "m_z", 987654321);
    w(this, "mask", 4294967295);
    this.m_w = 123456789 + u & this.mask, this.m_z = 987654321 - u & this.mask;
  }
  /**
   * Returns a random number between min and max
   */
  random(u = 1, e = 0) {
    this.m_z = 36969 * (this.m_z & 65535) + (this.m_z >> 16) & this.mask, this.m_w = 18e3 * (this.m_w & 65535) + (this.m_w >> 16) & this.mask;
    let r = (this.m_z << 16) + (this.m_w & 65535) >>> 0;
    return r /= 4294967296, (u - e) * r + e;
  }
}
class A {
  /**
   * Generates a new branch
   * @param {THREE.Vector3} origin The starting point of the branch
   * @param {THREE.Euler} orientation The starting orientation of the branch
   * @param {number} length The length of the branch
   * @param {number} radius The radius of the branch at its starting point
   */
  constructor(u = new t.Vector3(), e = new t.Euler(), r = 0, s = 0, c = 0, l = 0, h = 0) {
    this.origin = u.clone(), this.orientation = e.clone(), this.length = r, this.radius = s, this.level = c, this.sectionCount = l, this.segmentCount = h;
  }
}
const I = {
  Birch: "birch",
  Oak: "oak",
  Pine: "pine",
  Willow: "willow"
}, V = {
  Single: "single",
  Double: "double"
}, C = {
  Ash: "ash",
  Aspen: "aspen",
  Beech: "beech",
  Evergreen: "evergreen",
  Oak: "oak"
}, M = {
  Deciduous: "deciduous",
  Evergreen: "evergreen"
}, O = {
  seed: 0,
  type: M.Deciduous,
  // Tint of the tree trunk
  tint: 13999459,
  // Use face normals for shading instead of vertex normals
  flatShading: !1,
  // Apply texture to bark
  textured: !0,
  // Number of branch recursion levels. 0 = trunk only
  levels: 3,
  // Bark parameters
  bark: {
    // The bark texture
    type: "oak",
    // Texture scale
    scale: 1
  },
  // Branch parameters
  branch: {
    // Angle of the child branches relative to the parent branch (degrees)
    angle: {
      1: 60,
      2: 60,
      3: 60
    },
    // Number of children per branch level
    children: {
      0: 7,
      1: 4,
      2: 4
    },
    // External force encouraging tree growth in a particular direction
    force: {
      direction: { x: 0, y: 1, z: 0 },
      strength: 0.01
    },
    // Amount of curling/twisting  at each branch level
    gnarliness: {
      0: 0.2,
      1: 0.2,
      2: 0.05,
      3: 0.02
    },
    // Length of each branch level
    length: {
      0: 20,
      1: 15,
      2: 5,
      3: 1
    },
    // Radius of each branch level
    radius: {
      0: 0.7,
      1: 0.7,
      2: 0.7,
      3: 0.7
    },
    // Number of sections per branch level
    sections: {
      0: 12,
      1: 10,
      2: 8,
      3: 6
    },
    // Number of radial segments per branch level
    segments: {
      0: 8,
      1: 6,
      2: 4,
      3: 3
    },
    // Defines where child branches start forming on the parent branch
    start: {
      1: 0.5,
      2: 0.3,
      3: 0.3
    },
    // Taper at each branch level
    taper: {
      0: 0.7,
      1: 0.7,
      2: 0.7,
      3: 0.7
    },
    // Amount of twist at each branch level
    twist: {
      0: 0,
      1: 0,
      2: 0,
      3: 0
    }
  },
  // Leaf parameters
  leaves: {
    // Leaf texture to use
    type: C.Oak,
    // Whether to use single or double/perpendicular billboards
    billboard: V.Double,
    // Angle of leaves relative to parent branch (degrees)
    angle: 30,
    // Number of leaves
    count: 3,
    // Where leaves start to grow on the length of the branch (0 to 1)
    start: 0,
    // Size of the leaves
    size: 1.75,
    // Variance in leaf size between each instance
    sizeVariance: 0.7,
    // Tint color for the leaves
    tint: 9146216,
    // Controls transparency of leaf texture
    alphaTest: 0.5
  }
}, _ = {
  birch: {
    ao: "../src/textures/bark/birch_ao_1k.jpg",
    color: "../src/textures/bark/birch_color_1k.jpg",
    height: "../src/textures/bark/birch_height_1k.jpg",
    normal: "../src/textures/bark/birch_normal_1k.jpg",
    roughness: "../src/textures/bark/birch_roughness_1k.jpg"
  },
  oak: {
    ao: "../src/textures/bark/oak_ao_1k.jpg",
    color: "../src/textures/bark/oak_color_1k.jpg",
    height: "../src/textures/bark/oak_height_1k.jpg",
    normal: "../src/textures/bark/oak_normal_1k.jpg",
    roughness: "../src/textures/bark/oak_roughness_1k.jpg"
  },
  pine: {
    ao: "../src/textures/bark/pine_ao_1k.jpg",
    color: "../src/textures/bark/pine_color_1k.jpg",
    height: "../src/textures/bark/pine_height_1k.jpg",
    normal: "../src/textures/bark/pine_normal_1k.jpg",
    roughness: "../src/textures/bark/pine_roughness_1k.jpg"
  },
  willow: {
    ao: "../src/textures/bark/willow_ao_1k.jpg",
    color: "../src/textures/bark/willow_color_1k.jpg",
    height: "../src/textures/bark/willow_height_1k.jpg",
    normal: "../src/textures/bark/willow_normal_1k.jpg",
    roughness: "../src/textures/bark/willow_roughness_1k.jpg"
  }
}, L = {
  ash: "../src/textures/leaves/ash.png",
  aspen: "../src/textures/leaves/aspen.png",
  beech: "../src/textures/leaves/beech.png",
  evergreen: "../src/textures/leaves/evergreen.png",
  oak: "../src/textures/leaves/oak.png"
}, B = {}, T = new t.TextureLoader(), x = (p, u = new t.Vector2(1, 1)) => {
  if (B[p]) {
    const e = B[p];
    return e.wrapS = t.MirroredRepeatWrapping, e.wrapT = t.MirroredRepeatWrapping, e;
  } else {
    const e = new URL(p, import.meta.url).href, r = T.load(e);
    return B[p] = r, r;
  }
};
class D extends t.Group {
  /**
   * @param {TreeParams} params
   */
  constructor(e = O) {
    super();
    /**
     * @type {RNG}
     */
    w(this, "rng");
    /**
     * @type {TreeParams}
     */
    w(this, "params");
    /**
     * @type {Branch[]}
     */
    w(this, "branchQueue", []);
    this.params = e, this.branchesMesh = new t.Mesh(), this.leavesMesh = new t.Mesh(), this.add(this.branchesMesh), this.add(this.leavesMesh);
  }
  /**
   * Generate a new tree
   */
  async generate() {
    for (this.branches = {
      verts: [],
      normals: [],
      indices: [],
      uvs: []
    }, this.leaves = {
      verts: [],
      normals: [],
      indices: [],
      uvs: []
    }, this.rng = new S(this.params.seed), this.branchQueue.push(
      new A(
        new t.Vector3(),
        new t.Euler(),
        this.params.branch.length[0],
        this.params.branch.radius[0],
        0,
        this.params.branch.sections[0],
        this.params.branch.segments[0]
      )
    ); this.branchQueue.length > 0; ) {
      const e = this.branchQueue.shift();
      this.generateBranch(e);
    }
    this.createBranchesGeometry(), this.createLeavesGeometry();
  }
  /**
   * Generates a new branch
   * @param {Branch} branch
   * @returns
   */
  generateBranch(e) {
    const r = this.branches.verts.length / 3;
    let s = e.orientation.clone(), c = e.origin.clone(), l = e.length / e.sectionCount / (this.params.type === "Deciduous" ? this.params.levels - 1 : 1), h = [];
    for (let a = 0; a <= e.sectionCount; a++) {
      let o = e.radius;
      a === e.sectionCount && e.level === this.params.levels ? o = 1e-3 : this.params.type === M.Deciduous ? o *= 1 - this.params.branch.taper[e.level] * (a / e.sectionCount) : this.params.type === M.Evergreen && (o *= 1 - a / e.sectionCount);
      let n;
      for (let g = 0; g < e.segmentCount; g++) {
        let d = 2 * Math.PI * g / e.segmentCount;
        const v = new t.Vector3(Math.cos(d), 0, Math.sin(d)).multiplyScalar(o).applyEuler(s).add(c), b = new t.Vector3(Math.cos(d), 0, Math.sin(d)).applyEuler(s).normalize(), y = new t.Vector2(
          g / e.segmentCount,
          a % 2 === 0 ? 0 : 1
        );
        this.branches.verts.push(...Object.values(v)), this.branches.normals.push(...Object.values(b)), this.branches.uvs.push(...Object.values(y)), g === 0 && (n = { vertex: v, normal: b, uv: y });
      }
      this.branches.verts.push(...Object.values(n.vertex)), this.branches.normals.push(...Object.values(n.normal)), this.branches.uvs.push(1, n.uv.y), h.push({
        origin: c.clone(),
        orientation: s.clone(),
        radius: o
      }), c.add(
        new t.Vector3(0, l, 0).applyEuler(s)
      );
      const i = Math.max(1, 1 / Math.sqrt(o)) * this.params.branch.gnarliness[e.level];
      s.x += this.rng.random(i, -i), s.z += this.rng.random(i, -i);
      const m = new t.Quaternion().setFromEuler(s), f = new t.Quaternion().setFromAxisAngle(
        new t.Vector3(0, 1, 0),
        this.params.branch.twist[e.level]
      ), k = new t.Quaternion().setFromUnitVectors(
        new t.Vector3(0, 1, 0),
        new t.Vector3().copy(this.params.branch.force.direction)
      );
      m.multiply(f), m.rotateTowards(
        k,
        this.params.branch.force.strength / o
      ), s.setFromQuaternion(m);
    }
    if (this.generateBranchIndices(r, e), this.params.type === "deciduous") {
      const a = h[h.length - 1];
      e.level < this.params.levels ? this.branchQueue.push(
        new A(
          a.origin,
          a.orientation,
          this.params.branch.length[e.level + 1] / 2,
          a.radius,
          e.level + 1,
          // Section count and segment count must be same as parent branch
          // since the child branch is growing from the end of the parent branch
          e.sectionCount,
          e.segmentCount
        )
      ) : this.generateLeaf(a.origin, a.orientation);
    }
    e.level === this.params.levels ? this.generateLeaves(h) : e.level < this.params.levels && this.generateChildBranches(
      this.params.branch.children[e.level],
      e.level + 1,
      h
    );
  }
  /**
   * Generate branches from a parent branch
   * @param {number} count The number of child branches to generate
   * @param {number} level The level of the child branches
   * @param {{
   *  origin: THREE.Vector3,
   *  orientation: THREE.Euler,
   *  radius: number
   * }[]} sections The parent branch's sections
   * @returns
   */
  generateChildBranches(e, r, s) {
    const c = this.rng.random();
    for (let l = 0; l < e; l++) {
      let h = this.rng.random(1, this.params.branch.start[r]);
      const a = Math.floor(h * (s.length - 1));
      let o, n;
      o = s[a], a === s.length - 1 ? n = o : n = s[a + 1];
      const i = (h - a / (s.length - 1)) / (1 / (s.length - 1)), m = new t.Vector3().lerpVectors(
        o.origin,
        n.origin,
        i
      ), f = this.params.branch.radius[r] * ((1 - i) * o.radius + i * n.radius), k = new t.Quaternion().setFromEuler(o.orientation), g = new t.Quaternion().setFromEuler(n.orientation), d = new t.Euler().setFromQuaternion(
        g.slerp(k, i)
      ), v = 2 * Math.PI * (c + l / e), b = new t.Quaternion().setFromAxisAngle(
        new t.Vector3(1, 0, 0),
        this.params.branch.angle[r] / (180 / Math.PI)
      ), y = new t.Quaternion().setFromAxisAngle(
        new t.Vector3(0, 1, 0),
        v
      ), j = new t.Quaternion().setFromEuler(d), E = new t.Euler().setFromQuaternion(
        j.multiply(y.multiply(b))
      );
      let F = this.params.branch.length[r] * (this.params.type === M.Evergreen ? 1 - h : 1);
      this.branchQueue.push(
        new A(
          m,
          E,
          F,
          f,
          r,
          this.params.branch.sections[r],
          this.params.branch.segments[r]
        )
      );
    }
  }
  /**
   * Logic for spawning child branches from a parent branch's section
   * @param {{
  *  origin: THREE.Vector3,
  *  orientation: THREE.Euler,
  *  radius: number
  * }[]} sections The parent branch's sections
  * @returns
  */
  generateLeaves(e) {
    const r = this.rng.random();
    for (let s = 0; s < this.params.leaves.count; s++) {
      let c = this.rng.random(1, this.params.leaves.start);
      const l = Math.floor(c * (e.length - 1));
      let h, a;
      h = e[l], l === e.length - 1 ? a = h : a = e[l + 1];
      const o = (c - l / (e.length - 1)) / (1 / (e.length - 1)), n = new t.Vector3().lerpVectors(
        h.origin,
        a.origin,
        o
      ), i = new t.Quaternion().setFromEuler(h.orientation), m = new t.Quaternion().setFromEuler(a.orientation), f = new t.Euler().setFromQuaternion(
        m.slerp(i, o)
      ), k = 2 * Math.PI * (r + s / this.params.leaves.count), g = new t.Quaternion().setFromAxisAngle(
        new t.Vector3(1, 0, 0),
        this.params.leaves.angle / (180 / Math.PI)
      ), d = new t.Quaternion().setFromAxisAngle(
        new t.Vector3(0, 1, 0),
        k
      ), v = new t.Quaternion().setFromEuler(f), b = new t.Euler().setFromQuaternion(
        v.multiply(d.multiply(g))
      );
      this.generateLeaf(n, b);
    }
  }
  /**
  * Generates a leaves
  * @param {THREE.Vector3} origin The starting point of the branch
  * @param {THREE.Euler} orientation The starting orientation of the branch
  */
  generateLeaf(e, r) {
    let s = this.leaves.verts.length / 3, c = this.params.leaves.size * (1 + this.rng.random(
      this.params.leaves.sizeVariance,
      -this.params.leaves.sizeVariance
    ));
    const l = c, h = 1.5 * c, a = (o) => {
      const n = [
        new t.Vector3(-l / 2, h, 0),
        new t.Vector3(-l / 2, 0, 0),
        new t.Vector3(l / 2, 0, 0),
        new t.Vector3(l / 2, h, 0)
      ].map(
        (m) => m.applyEuler(new t.Euler(0, o, 0)).applyEuler(r).add(e)
      );
      this.leaves.verts.push(
        n[0].x,
        n[0].y,
        n[0].z,
        n[1].x,
        n[1].y,
        n[1].z,
        n[2].x,
        n[2].y,
        n[2].z,
        n[3].x,
        n[3].y,
        n[3].z
      );
      const i = new t.Vector3(0, 0, 1).applyEuler(r);
      this.leaves.normals.push(
        i.x,
        i.y,
        i.z,
        i.x,
        i.y,
        i.z,
        i.x,
        i.y,
        i.z,
        i.x,
        i.y,
        i.z
      ), this.leaves.uvs.push(0, 1, 0, 0, 1, 0, 1, 1), this.leaves.indices.push(s, s + 1, s + 2, s, s + 2, s + 3), s += 4;
    };
    a(0), this.params.leaves.billboard === V.Double && a(Math.PI / 2);
  }
  /**
   * Generates the indices for branch geometry
   * @param {Branch} branch
   */
  generateBranchIndices(e, r) {
    let s, c, l, h;
    const a = r.segmentCount + 1;
    for (let o = 0; o < r.sectionCount; o++)
      for (let n = 0; n < r.segmentCount; n++)
        s = e + o * a + n, c = e + o * a + (n + 1), l = s + a, h = c + a, this.branches.indices.push(s, l, c, c, l, h);
  }
  /**
   * Generates the geometry for the branches
   */
  createBranchesGeometry() {
    const e = new t.BufferGeometry();
    e.setAttribute(
      "position",
      new t.BufferAttribute(new Float32Array(this.branches.verts), 3)
    ), e.setAttribute(
      "normal",
      new t.BufferAttribute(new Float32Array(this.branches.normals), 3)
    ), e.setAttribute(
      "uv",
      new t.BufferAttribute(new Float32Array(this.branches.uvs), 2)
    ), e.setIndex(
      new t.BufferAttribute(new Uint16Array(this.branches.indices), 1)
    ), e.computeBoundingSphere();
    const r = new t.MeshStandardMaterial({
      name: "branches",
      flatShading: this.params.flatShading,
      color: this.params.tint
    });
    this.branchesMesh.geometry.dispose(), this.branchesMesh.geometry = e, this.branchesMesh.material.dispose(), this.branchesMesh.material = r, this.branchesMesh.castShadow = !0, this.branchesMesh.receiveShadow = !0, this.params.textured && (this.branchesMesh.material.aoMap = x(_[this.params.bark.type].ao, this.params.bark.scale), this.branchesMesh.material.map = x(_[this.params.bark.type].color, this.params.bark.scale), this.branchesMesh.material.normalMap = x(_[this.params.bark.type].normal, this.params.bark.scale), this.branchesMesh.material.roughnessMap = x(_[this.params.bark.type].roughness, this.params.bark.scale));
  }
  /**
   * Generates the geometry for the leaves
   */
  createLeavesGeometry() {
    const e = new t.BufferGeometry();
    e.setAttribute(
      "position",
      new t.BufferAttribute(new Float32Array(this.leaves.verts), 3)
    ), e.setAttribute(
      "uv",
      new t.BufferAttribute(new Float32Array(this.leaves.uvs), 2)
    ), e.setIndex(
      new t.BufferAttribute(new Uint16Array(this.leaves.indices), 1)
    ), e.computeVertexNormals(), e.computeBoundingSphere();
    const r = new t.MeshStandardMaterial({
      name: "leaves",
      color: this.params.leaves.tint,
      side: t.DoubleSide,
      transparent: !0,
      alphaTest: this.params.leaves.alphaTest
    });
    this.leavesMesh.geometry.dispose(), this.leavesMesh.geometry = e, this.leavesMesh.material.dispose(), this.leavesMesh.material = r, this.leavesMesh.material.map = x(L[this.params.leaves.type]), this.leavesMesh.castShadow = !0, this.leavesMesh.receiveShadow = !0;
  }
}
export {
  I as BarkType,
  V as Billboard,
  C as LeafType,
  D as Tree,
  M as TreeType
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRncmVlbmhlY2stdHJlZS1qcy5lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3JuZy5qcyIsIi4uL3NyYy9icmFuY2guanMiLCIuLi9zcmMvZW51bXMuanMiLCIuLi9zcmMvdHJlZVBhcmFtcy5qcyIsIi4uL3NyYy90cmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJORyB7XG4gIG1fdyA9IDEyMzQ1Njc4OTtcbiAgbV96ID0gOTg3NjU0MzIxO1xuICBtYXNrID0gMHhmZmZmZmZmZjtcblxuICBjb25zdHJ1Y3RvcihzZWVkKSB7XG4gICAgdGhpcy5tX3cgPSAoMTIzNDU2Nzg5ICsgc2VlZCkgJiB0aGlzLm1hc2s7XG4gICAgdGhpcy5tX3ogPSAoOTg3NjU0MzIxIC0gc2VlZCkgJiB0aGlzLm1hc2s7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICAgKi9cbiAgcmFuZG9tKG1heCA9IDEsIG1pbiA9IDApIHtcbiAgICB0aGlzLm1feiA9ICgzNjk2OSAqICh0aGlzLm1feiAmIDY1NTM1KSArICh0aGlzLm1feiA+PiAxNikpICYgdGhpcy5tYXNrO1xuICAgIHRoaXMubV93ID0gKDE4MDAwICogKHRoaXMubV93ICYgNjU1MzUpICsgKHRoaXMubV93ID4+IDE2KSkgJiB0aGlzLm1hc2s7XG4gICAgbGV0IHJlc3VsdCA9ICgodGhpcy5tX3ogPDwgMTYpICsgKHRoaXMubV93ICYgNjU1MzUpKSA+Pj4gMDtcbiAgICByZXN1bHQgLz0gNDI5NDk2NzI5NjtcblxuICAgIHJldHVybiAobWF4IC0gbWluKSAqIHJlc3VsdCArIG1pbjtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgY2xhc3MgQnJhbmNoIHtcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIG5ldyBicmFuY2hcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IzfSBvcmlnaW4gVGhlIHN0YXJ0aW5nIHBvaW50IG9mIHRoZSBicmFuY2hcbiAgICogQHBhcmFtIHtUSFJFRS5FdWxlcn0gb3JpZW50YXRpb24gVGhlIHN0YXJ0aW5nIG9yaWVudGF0aW9uIG9mIHRoZSBicmFuY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBicmFuY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgcmFkaXVzIG9mIHRoZSBicmFuY2ggYXQgaXRzIHN0YXJ0aW5nIHBvaW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBvcmlnaW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxuICAgIG9yaWVudGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKCksXG4gICAgbGVuZ3RoID0gMCxcbiAgICByYWRpdXMgPSAwLFxuICAgIGxldmVsID0gMCxcbiAgICBzZWN0aW9uQ291bnQgPSAwLFxuICAgIHNlZ21lbnRDb3VudCA9IDAsXG4gICkge1xuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luLmNsb25lKCk7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuc2VjdGlvbkNvdW50ID0gc2VjdGlvbkNvdW50O1xuICAgIHRoaXMuc2VnbWVudENvdW50ID0gc2VnbWVudENvdW50O1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQmFya1R5cGUgPSB7XG4gIEJpcmNoOiAnYmlyY2gnLFxuICBPYWs6ICdvYWsnLFxuICBQaW5lOiAncGluZScsXG4gIFdpbGxvdzogJ3dpbGxvdydcbn07XG5cbmV4cG9ydCBjb25zdCBCaWxsYm9hcmQgPSB7XG4gIFNpbmdsZTogJ3NpbmdsZScsXG4gIERvdWJsZTogJ2RvdWJsZScsXG59O1xuXG5leHBvcnQgY29uc3QgTGVhZlR5cGUgPSB7XG4gIEFzaDogJ2FzaCcsXG4gIEFzcGVuOiAnYXNwZW4nLFxuICBCZWVjaDogJ2JlZWNoJyxcbiAgRXZlcmdyZWVuOiAnZXZlcmdyZWVuJyxcbiAgT2FrOiAnb2FrJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUcmVlVHlwZSA9IHtcbiAgRGVjaWR1b3VzOiAnZGVjaWR1b3VzJyxcbiAgRXZlcmdyZWVuOiAnZXZlcmdyZWVuJyxcbn07IiwiaW1wb3J0IHsgQmlsbGJvYXJkLCBMZWFmVHlwZSwgVHJlZVR5cGUgfSBmcm9tICcuL2VudW1zJ1xuXG5leHBvcnQgY29uc3QgVHJlZVBhcmFtcyA9IHtcbiAgc2VlZDogMCxcbiAgdHlwZTogVHJlZVR5cGUuRGVjaWR1b3VzLFxuXG4gIC8vIFRpbnQgb2YgdGhlIHRyZWUgdHJ1bmtcbiAgdGludDogMHhkNTlkNjMsXG5cbiAgLy8gVXNlIGZhY2Ugbm9ybWFscyBmb3Igc2hhZGluZyBpbnN0ZWFkIG9mIHZlcnRleCBub3JtYWxzXG4gIGZsYXRTaGFkaW5nOiBmYWxzZSxcblxuICAvLyBBcHBseSB0ZXh0dXJlIHRvIGJhcmtcbiAgdGV4dHVyZWQ6IHRydWUsXG5cbiAgLy8gTnVtYmVyIG9mIGJyYW5jaCByZWN1cnNpb24gbGV2ZWxzLiAwID0gdHJ1bmsgb25seVxuICBsZXZlbHM6IDMsXG5cbiAgLy8gQmFyayBwYXJhbWV0ZXJzXG4gIGJhcms6IHtcbiAgICAvLyBUaGUgYmFyayB0ZXh0dXJlXG4gICAgdHlwZTogJ29haycsXG5cbiAgICAvLyBUZXh0dXJlIHNjYWxlXG4gICAgc2NhbGU6IDFcbiAgfSxcblxuICAvLyBCcmFuY2ggcGFyYW1ldGVyc1xuICBicmFuY2g6IHtcblxuICAgIC8vIEFuZ2xlIG9mIHRoZSBjaGlsZCBicmFuY2hlcyByZWxhdGl2ZSB0byB0aGUgcGFyZW50IGJyYW5jaCAoZGVncmVlcylcbiAgICBhbmdsZToge1xuICAgICAgMTogNjAsXG4gICAgICAyOiA2MCxcbiAgICAgIDM6IDYwXG4gICAgfSxcblxuICAgIC8vIE51bWJlciBvZiBjaGlsZHJlbiBwZXIgYnJhbmNoIGxldmVsXG4gICAgY2hpbGRyZW46IHtcbiAgICAgIDA6IDcsXG4gICAgICAxOiA0LFxuICAgICAgMjogNFxuICAgIH0sXG5cbiAgICAvLyBFeHRlcm5hbCBmb3JjZSBlbmNvdXJhZ2luZyB0cmVlIGdyb3d0aCBpbiBhIHBhcnRpY3VsYXIgZGlyZWN0aW9uXG4gICAgZm9yY2U6IHtcbiAgICAgIGRpcmVjdGlvbjogeyB4OiAwLCB5OiAxLCB6OiAwIH0sXG4gICAgICBzdHJlbmd0aDogMC4wMSxcbiAgICB9LFxuXG4gICAgLy8gQW1vdW50IG9mIGN1cmxpbmcvdHdpc3RpbmcgIGF0IGVhY2ggYnJhbmNoIGxldmVsXG4gICAgZ25hcmxpbmVzczoge1xuICAgICAgMDogMC4yLFxuICAgICAgMTogMC4yLFxuICAgICAgMjogMC4wNSxcbiAgICAgIDM6IDAuMDIsXG4gICAgfSxcblxuICAgIC8vIExlbmd0aCBvZiBlYWNoIGJyYW5jaCBsZXZlbFxuICAgIGxlbmd0aDoge1xuICAgICAgMDogMjAsXG4gICAgICAxOiAxNSxcbiAgICAgIDI6IDUsXG4gICAgICAzOiAxXG4gICAgfSxcblxuICAgIC8vIFJhZGl1cyBvZiBlYWNoIGJyYW5jaCBsZXZlbFxuICAgIHJhZGl1czoge1xuICAgICAgMDogMC43LFxuICAgICAgMTogMC43LFxuICAgICAgMjogMC43LFxuICAgICAgMzogMC43XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBvZiBzZWN0aW9ucyBwZXIgYnJhbmNoIGxldmVsXG4gICAgc2VjdGlvbnM6IHtcbiAgICAgIDA6IDEyLFxuICAgICAgMTogMTAsXG4gICAgICAyOiA4LFxuICAgICAgMzogNixcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIG9mIHJhZGlhbCBzZWdtZW50cyBwZXIgYnJhbmNoIGxldmVsXG4gICAgc2VnbWVudHM6IHtcbiAgICAgIDA6IDgsXG4gICAgICAxOiA2LFxuICAgICAgMjogNCxcbiAgICAgIDM6IDMsXG4gICAgfSxcblxuICAgIC8vIERlZmluZXMgd2hlcmUgY2hpbGQgYnJhbmNoZXMgc3RhcnQgZm9ybWluZyBvbiB0aGUgcGFyZW50IGJyYW5jaFxuICAgIHN0YXJ0OiB7XG4gICAgICAxOiAwLjUsXG4gICAgICAyOiAwLjMsXG4gICAgICAzOiAwLjNcbiAgICB9LFxuXG4gICAgLy8gVGFwZXIgYXQgZWFjaCBicmFuY2ggbGV2ZWxcbiAgICB0YXBlcjoge1xuICAgICAgMDogMC43LFxuICAgICAgMTogMC43LFxuICAgICAgMjogMC43LFxuICAgICAgMzogMC43LFxuICAgIH0sXG5cbiAgICAvLyBBbW91bnQgb2YgdHdpc3QgYXQgZWFjaCBicmFuY2ggbGV2ZWxcbiAgICB0d2lzdDoge1xuICAgICAgMDogMCxcbiAgICAgIDE6IDAsXG4gICAgICAyOiAwLFxuICAgICAgMzogMCxcbiAgICB9LFxuICB9LFxuXG4gIC8vIExlYWYgcGFyYW1ldGVyc1xuICBsZWF2ZXM6IHtcbiAgICAvLyBMZWFmIHRleHR1cmUgdG8gdXNlXG4gICAgdHlwZTogTGVhZlR5cGUuT2FrLFxuXG4gICAgLy8gV2hldGhlciB0byB1c2Ugc2luZ2xlIG9yIGRvdWJsZS9wZXJwZW5kaWN1bGFyIGJpbGxib2FyZHNcbiAgICBiaWxsYm9hcmQ6IEJpbGxib2FyZC5Eb3VibGUsXG5cbiAgICAvLyBBbmdsZSBvZiBsZWF2ZXMgcmVsYXRpdmUgdG8gcGFyZW50IGJyYW5jaCAoZGVncmVlcylcbiAgICBhbmdsZTogMzAsXG5cbiAgICAvLyBOdW1iZXIgb2YgbGVhdmVzXG4gICAgY291bnQ6IDMsXG5cbiAgICAvLyBXaGVyZSBsZWF2ZXMgc3RhcnQgdG8gZ3JvdyBvbiB0aGUgbGVuZ3RoIG9mIHRoZSBicmFuY2ggKDAgdG8gMSlcbiAgICBzdGFydDogMCxcblxuICAgIC8vIFNpemUgb2YgdGhlIGxlYXZlc1xuICAgIHNpemU6IDEuNzUsXG5cbiAgICAvLyBWYXJpYW5jZSBpbiBsZWFmIHNpemUgYmV0d2VlbiBlYWNoIGluc3RhbmNlXG4gICAgc2l6ZVZhcmlhbmNlOiAwLjcsXG5cbiAgICAvLyBUaW50IGNvbG9yIGZvciB0aGUgbGVhdmVzXG4gICAgdGludDogMHg4YjhmNjgsXG5cbiAgICAvLyBDb250cm9scyB0cmFuc3BhcmVuY3kgb2YgbGVhZiB0ZXh0dXJlXG4gICAgYWxwaGFUZXN0OiAwLjUsXG4gIH0sXG59OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBSTkcgZnJvbSAnLi9ybmcnO1xuaW1wb3J0IHsgQnJhbmNoIH0gZnJvbSAnLi9icmFuY2gnO1xuaW1wb3J0IHsgQmlsbGJvYXJkLCBUcmVlVHlwZSB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHsgVHJlZVBhcmFtcyB9IGZyb20gJy4vdHJlZVBhcmFtcyc7XG5pbXBvcnQgKiBhcyB0ZXh0dXJlcyBmcm9tICcuL3RleHR1cmVzL2luZGV4Lmpzb24nO1xuXG5jb25zdCB0ZXh0dXJlQ2FjaGUgPSB7fTtcblxuY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5jb25zdCBsb2FkVGV4dHVyZSA9IChwYXRoLCBzY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDEsIDEpKSA9PiB7XG4gIGlmICh0ZXh0dXJlQ2FjaGVbcGF0aF0pIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGV4dHVyZUNhY2hlW3BhdGhdO1xuICAgIHRleHR1cmUud3JhcFMgPSBUSFJFRS5NaXJyb3JlZFJlcGVhdFdyYXBwaW5nO1xuICAgIHRleHR1cmUud3JhcFQgPSBUSFJFRS5NaXJyb3JlZFJlcGVhdFdyYXBwaW5nO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmO1xuICAgIGNvbnN0IHRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodXJsKTtcbiAgICB0ZXh0dXJlQ2FjaGVbcGF0aF0gPSB0ZXh0dXJlO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSTkd9XG4gICAqL1xuICBybmc7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUcmVlUGFyYW1zfVxuICAgKi9cbiAgcGFyYW1zO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7QnJhbmNoW119XG4gICAqL1xuICBicmFuY2hRdWV1ZSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyZWVQYXJhbXN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zID0gVHJlZVBhcmFtcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5icmFuY2hlc01lc2ggPSBuZXcgVEhSRUUuTWVzaCgpO1xuICAgIHRoaXMubGVhdmVzTWVzaCA9IG5ldyBUSFJFRS5NZXNoKCk7XG4gICAgdGhpcy5hZGQodGhpcy5icmFuY2hlc01lc2gpO1xuICAgIHRoaXMuYWRkKHRoaXMubGVhdmVzTWVzaCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBuZXcgdHJlZVxuICAgKi9cbiAgYXN5bmMgZ2VuZXJhdGUoKSB7XG4gICAgLy8gQ2xlYW4gdXAgb2xkIGdlb21ldHJ5XG4gICAgdGhpcy5icmFuY2hlcyA9IHtcbiAgICAgIHZlcnRzOiBbXSxcbiAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgaW5kaWNlczogW10sXG4gICAgICB1dnM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLmxlYXZlcyA9IHtcbiAgICAgIHZlcnRzOiBbXSxcbiAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgaW5kaWNlczogW10sXG4gICAgICB1dnM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLnJuZyA9IG5ldyBSTkcodGhpcy5wYXJhbXMuc2VlZCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRydW5rIG9mIHRoZSB0cmVlIGZpcnN0XG4gICAgdGhpcy5icmFuY2hRdWV1ZS5wdXNoKFxuICAgICAgbmV3IEJyYW5jaChcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoKSxcbiAgICAgICAgbmV3IFRIUkVFLkV1bGVyKCksXG4gICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC5sZW5ndGhbMF0sXG4gICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC5yYWRpdXNbMF0sXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC5zZWN0aW9uc1swXSxcbiAgICAgICAgdGhpcy5wYXJhbXMuYnJhbmNoLnNlZ21lbnRzWzBdLFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgd2hpbGUgKHRoaXMuYnJhbmNoUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYnJhbmNoID0gdGhpcy5icmFuY2hRdWV1ZS5zaGlmdCgpO1xuICAgICAgdGhpcy5nZW5lcmF0ZUJyYW5jaChicmFuY2gpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQnJhbmNoZXNHZW9tZXRyeSgpO1xuICAgIHRoaXMuY3JlYXRlTGVhdmVzR2VvbWV0cnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBuZXcgYnJhbmNoXG4gICAqIEBwYXJhbSB7QnJhbmNofSBicmFuY2hcbiAgICogQHJldHVybnNcbiAgICovXG4gIGdlbmVyYXRlQnJhbmNoKGJyYW5jaCkge1xuICAgIC8vIFVzZWQgbGF0ZXIgZm9yIGdlb21ldHJ5IGluZGV4IGdlbmVyYXRpb25cbiAgICBjb25zdCBpbmRleE9mZnNldCA9IHRoaXMuYnJhbmNoZXMudmVydHMubGVuZ3RoIC8gMztcblxuICAgIGxldCBzZWN0aW9uT3JpZW50YXRpb24gPSBicmFuY2gub3JpZW50YXRpb24uY2xvbmUoKTtcbiAgICBsZXQgc2VjdGlvbk9yaWdpbiA9IGJyYW5jaC5vcmlnaW4uY2xvbmUoKTtcbiAgICBsZXQgc2VjdGlvbkxlbmd0aCA9XG4gICAgICBicmFuY2gubGVuZ3RoIC9cbiAgICAgIGJyYW5jaC5zZWN0aW9uQ291bnQgL1xuICAgICAgKHRoaXMucGFyYW1zLnR5cGUgPT09ICdEZWNpZHVvdXMnID8gdGhpcy5wYXJhbXMubGV2ZWxzIC0gMSA6IDEpO1xuXG4gICAgLy8gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGZvciBnZW5lcmF0aW5nIGNoaWxkIGJyYW5jaGVzIGFmdGVyIHRoZSBicmFuY2hcbiAgICAvLyBnZW9tZXRyeSBoYXMgYmVlbiBjb25zdHJ1Y3RlZFxuICAgIGxldCBzZWN0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYnJhbmNoLnNlY3Rpb25Db3VudDsgaSsrKSB7XG4gICAgICBsZXQgc2VjdGlvblJhZGl1cyA9IGJyYW5jaC5yYWRpdXM7XG5cbiAgICAgIC8vIElmIGZpbmFsIHNlY3Rpb24gb2YgZmluYWwgbGV2ZWwsIHNldCByYWRpdXMgdG8gZWZmZWNpdmVseSB6ZXJvXG4gICAgICBpZiAoXG4gICAgICAgIGkgPT09IGJyYW5jaC5zZWN0aW9uQ291bnQgJiZcbiAgICAgICAgYnJhbmNoLmxldmVsID09PSB0aGlzLnBhcmFtcy5sZXZlbHNcbiAgICAgICkge1xuICAgICAgICBzZWN0aW9uUmFkaXVzID0gMC4wMDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLnR5cGUgPT09IFRyZWVUeXBlLkRlY2lkdW91cykge1xuICAgICAgICBzZWN0aW9uUmFkaXVzICo9XG4gICAgICAgICAgMSAtIHRoaXMucGFyYW1zLmJyYW5jaC50YXBlclticmFuY2gubGV2ZWxdICogKGkgLyBicmFuY2guc2VjdGlvbkNvdW50KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMudHlwZSA9PT0gVHJlZVR5cGUuRXZlcmdyZWVuKSB7XG4gICAgICAgIC8vIEV2ZXJncmVlbnMgZG8gbm90IGhhdmUgYSB0ZXJtaW5hbCBicmFuY2ggc28gdGhleSBoYXZlIGEgdGFwZXIgb2YgMVxuICAgICAgICBzZWN0aW9uUmFkaXVzICo9IDEgLSAoaSAvIGJyYW5jaC5zZWN0aW9uQ291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIHNlZ21lbnRzIHRoYXQgbWFrZSB1cCB0aGlzIHNlY3Rpb24uXG4gICAgICBsZXQgZmlyc3Q7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJyYW5jaC5zZWdtZW50Q291bnQ7IGorKykge1xuICAgICAgICBsZXQgYW5nbGUgPSAoMi4wICogTWF0aC5QSSAqIGopIC8gYnJhbmNoLnNlZ21lbnRDb3VudDtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlZ21lbnQgdmVydGV4XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguY29zKGFuZ2xlKSwgMCwgTWF0aC5zaW4oYW5nbGUpKVxuICAgICAgICAgIC5tdWx0aXBseVNjYWxhcihzZWN0aW9uUmFkaXVzKVxuICAgICAgICAgIC5hcHBseUV1bGVyKHNlY3Rpb25PcmllbnRhdGlvbilcbiAgICAgICAgICAuYWRkKHNlY3Rpb25PcmlnaW4pO1xuXG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguY29zKGFuZ2xlKSwgMCwgTWF0aC5zaW4oYW5nbGUpKVxuICAgICAgICAgIC5hcHBseUV1bGVyKHNlY3Rpb25PcmllbnRhdGlvbilcbiAgICAgICAgICAubm9ybWFsaXplKCk7XG5cbiAgICAgICAgY29uc3QgdXYgPSBuZXcgVEhSRUUuVmVjdG9yMihcbiAgICAgICAgICBqIC8gYnJhbmNoLnNlZ21lbnRDb3VudCxcbiAgICAgICAgICAoaSAlIDIgPT09IDApID8gMCA6IDEsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5icmFuY2hlcy52ZXJ0cy5wdXNoKC4uLk9iamVjdC52YWx1ZXModmVydGV4KSk7XG4gICAgICAgIHRoaXMuYnJhbmNoZXMubm9ybWFscy5wdXNoKC4uLk9iamVjdC52YWx1ZXMobm9ybWFsKSk7XG4gICAgICAgIHRoaXMuYnJhbmNoZXMudXZzLnB1c2goLi4uT2JqZWN0LnZhbHVlcyh1dikpO1xuXG4gICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgZmlyc3QgPSB7IHZlcnRleCwgbm9ybWFsLCB1diB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIER1cGxpY2F0ZSB0aGUgZmlyc3QgdmVydGV4IHNvIHRoZXJlIGlzIGNvbnRpbnVpdHkgaW4gdGhlIFVWIG1hcHBpbmdcbiAgICAgIHRoaXMuYnJhbmNoZXMudmVydHMucHVzaCguLi5PYmplY3QudmFsdWVzKGZpcnN0LnZlcnRleCkpO1xuICAgICAgdGhpcy5icmFuY2hlcy5ub3JtYWxzLnB1c2goLi4uT2JqZWN0LnZhbHVlcyhmaXJzdC5ub3JtYWwpKTtcbiAgICAgIHRoaXMuYnJhbmNoZXMudXZzLnB1c2goMSwgZmlyc3QudXYueSk7XG5cbiAgICAgIC8vIFVzZSB0aGlzIGluZm9ybWF0aW9uIGxhdGVyIG9uIHdoZW4gZ2VuZXJhdGluZyBjaGlsZCBicmFuY2hlc1xuICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgIG9yaWdpbjogc2VjdGlvbk9yaWdpbi5jbG9uZSgpLFxuICAgICAgICBvcmllbnRhdGlvbjogc2VjdGlvbk9yaWVudGF0aW9uLmNsb25lKCksXG4gICAgICAgIHJhZGl1czogc2VjdGlvblJhZGl1cyxcbiAgICAgIH0pO1xuXG4gICAgICBzZWN0aW9uT3JpZ2luLmFkZChcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgc2VjdGlvbkxlbmd0aCwgMCkuYXBwbHlFdWxlcihzZWN0aW9uT3JpZW50YXRpb24pLFxuICAgICAgKTtcblxuICAgICAgLy8gUGVydHVyYiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIG5leHQgc2VjdGlvbiByYW5kb21seS4gVGhlIGhpZ2hlciB0aGVcbiAgICAgIC8vIGduYXJsaW5lc3MsIHRoZSBsYXJnZXIgcG90ZW50aWFsIHBlcnR1cmJhdGlvblxuICAgICAgY29uc3QgZ25hcmxpbmVzcyA9XG4gICAgICAgIE1hdGgubWF4KDEsIDEgLyBNYXRoLnNxcnQoc2VjdGlvblJhZGl1cykpICpcbiAgICAgICAgdGhpcy5wYXJhbXMuYnJhbmNoLmduYXJsaW5lc3NbYnJhbmNoLmxldmVsXTtcblxuICAgICAgc2VjdGlvbk9yaWVudGF0aW9uLnggKz0gdGhpcy5ybmcucmFuZG9tKGduYXJsaW5lc3MsIC1nbmFybGluZXNzKTtcbiAgICAgIHNlY3Rpb25PcmllbnRhdGlvbi56ICs9IHRoaXMucm5nLnJhbmRvbShnbmFybGluZXNzLCAtZ25hcmxpbmVzcyk7XG5cbiAgICAgIC8vIEFwcGx5IGdyb3d0aCBmb3JjZSB0byB0aGUgYnJhbmNoXG4gICAgICBjb25zdCBxU2VjdGlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKHNlY3Rpb25PcmllbnRhdGlvbik7XG5cbiAgICAgIGNvbnN0IHFUd2lzdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC50d2lzdFticmFuY2gubGV2ZWxdLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgcUZvcmNlID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygpLmNvcHkodGhpcy5wYXJhbXMuYnJhbmNoLmZvcmNlLmRpcmVjdGlvbiksXG4gICAgICApO1xuXG4gICAgICBxU2VjdGlvbi5tdWx0aXBseShxVHdpc3QpO1xuICAgICAgcVNlY3Rpb24ucm90YXRlVG93YXJkcyhcbiAgICAgICAgcUZvcmNlLFxuICAgICAgICB0aGlzLnBhcmFtcy5icmFuY2guZm9yY2Uuc3RyZW5ndGggLyBzZWN0aW9uUmFkaXVzLFxuICAgICAgKTtcblxuICAgICAgc2VjdGlvbk9yaWVudGF0aW9uLnNldEZyb21RdWF0ZXJuaW9uKHFTZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRlQnJhbmNoSW5kaWNlcyhpbmRleE9mZnNldCwgYnJhbmNoKTtcblxuICAgIC8vIERlY2lkdW91cyB0cmVlcyBoYXZlIGEgdGVybWluYWwgYnJhbmNoIHRoYXQgZ3Jvd3Mgb3V0IG9mIHRoZVxuICAgIC8vIGVuZCBvZiB0aGUgcGFyZW50IGJyYW5jaFxuICAgIGlmICh0aGlzLnBhcmFtcy50eXBlID09PSAnZGVjaWR1b3VzJykge1xuICAgICAgY29uc3QgbGFzdFNlY3Rpb24gPSBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGJyYW5jaC5sZXZlbCA8IHRoaXMucGFyYW1zLmxldmVscykge1xuICAgICAgICB0aGlzLmJyYW5jaFF1ZXVlLnB1c2goXG4gICAgICAgICAgbmV3IEJyYW5jaChcbiAgICAgICAgICAgIGxhc3RTZWN0aW9uLm9yaWdpbixcbiAgICAgICAgICAgIGxhc3RTZWN0aW9uLm9yaWVudGF0aW9uLFxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuYnJhbmNoLmxlbmd0aFticmFuY2gubGV2ZWwgKyAxXSAvIDIsXG4gICAgICAgICAgICBsYXN0U2VjdGlvbi5yYWRpdXMsXG4gICAgICAgICAgICBicmFuY2gubGV2ZWwgKyAxLFxuICAgICAgICAgICAgLy8gU2VjdGlvbiBjb3VudCBhbmQgc2VnbWVudCBjb3VudCBtdXN0IGJlIHNhbWUgYXMgcGFyZW50IGJyYW5jaFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlIGNoaWxkIGJyYW5jaCBpcyBncm93aW5nIGZyb20gdGhlIGVuZCBvZiB0aGUgcGFyZW50IGJyYW5jaFxuICAgICAgICAgICAgYnJhbmNoLnNlY3Rpb25Db3VudCxcbiAgICAgICAgICAgIGJyYW5jaC5zZWdtZW50Q291bnQsXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMZWFmKGxhc3RTZWN0aW9uLm9yaWdpbiwgbGFzdFNlY3Rpb24ub3JpZW50YXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIGFyZSBvbiB0aGUgbGFzdCBicmFuY2ggbGV2ZWwsIGdlbmVyYXRlIGxlYXZlc1xuICAgIGlmIChicmFuY2gubGV2ZWwgPT09IHRoaXMucGFyYW1zLmxldmVscykge1xuICAgICAgdGhpcy5nZW5lcmF0ZUxlYXZlcyhzZWN0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChicmFuY2gubGV2ZWwgPCB0aGlzLnBhcmFtcy5sZXZlbHMpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDaGlsZEJyYW5jaGVzKFxuICAgICAgICB0aGlzLnBhcmFtcy5icmFuY2guY2hpbGRyZW5bYnJhbmNoLmxldmVsXSxcbiAgICAgICAgYnJhbmNoLmxldmVsICsgMSxcbiAgICAgICAgc2VjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBicmFuY2hlcyBmcm9tIGEgcGFyZW50IGJyYW5jaFxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGlsZCBicmFuY2hlcyB0byBnZW5lcmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgVGhlIGxldmVsIG9mIHRoZSBjaGlsZCBicmFuY2hlc1xuICAgKiBAcGFyYW0ge3tcbiAgICogIG9yaWdpbjogVEhSRUUuVmVjdG9yMyxcbiAgICogIG9yaWVudGF0aW9uOiBUSFJFRS5FdWxlcixcbiAgICogIHJhZGl1czogbnVtYmVyXG4gICAqIH1bXX0gc2VjdGlvbnMgVGhlIHBhcmVudCBicmFuY2gncyBzZWN0aW9uc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgZ2VuZXJhdGVDaGlsZEJyYW5jaGVzKGNvdW50LCBsZXZlbCwgc2VjdGlvbnMpIHtcbiAgICBjb25zdCByYWRpYWxPZmZzZXQgPSB0aGlzLnJuZy5yYW5kb20oKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBmYXIgYWxvbmcgdGhlIGxlbmd0aCBvZiB0aGUgcGFyZW50IGJyYW5jaCB0aGUgY2hpbGRcbiAgICAgIC8vIGJyYW5jaCBzaG91bGQgb3JpZ2luYXRlIGZyb20gKDAgdG8gMSlcbiAgICAgIGxldCBjaGlsZEJyYW5jaFN0YXJ0ID0gdGhpcy5ybmcucmFuZG9tKDEuMCwgdGhpcy5wYXJhbXMuYnJhbmNoLnN0YXJ0W2xldmVsXSk7XG5cbiAgICAgIC8vIEZpbmQgd2hpY2ggc2VjdGlvbnMgYXJlIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjaGlsZCBicmFuY2ggb3JpZ2luIHBvaW50XG4gICAgICAvLyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIHRoZSBvcmlnaW4sIG9yaWVudGF0aW9uIGFuZCByYWRpdXMgb2YgdGhlIGJyYW5jaFxuICAgICAgY29uc3Qgc2VjdGlvbkluZGV4ID0gTWF0aC5mbG9vcihjaGlsZEJyYW5jaFN0YXJ0ICogKHNlY3Rpb25zLmxlbmd0aCAtIDEpKTtcbiAgICAgIGxldCBzZWN0aW9uQSwgc2VjdGlvbkI7XG4gICAgICBzZWN0aW9uQSA9IHNlY3Rpb25zW3NlY3Rpb25JbmRleF07XG4gICAgICBpZiAoc2VjdGlvbkluZGV4ID09PSBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHNlY3Rpb25CID0gc2VjdGlvbkE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uQiA9IHNlY3Rpb25zW3NlY3Rpb25JbmRleCArIDFdO1xuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG5vcm1hbGl6ZWQgZGlzdGFuY2UgZnJvbSBzZWN0aW9uIEEgdG8gc2VjdGlvbiBCICgwIHRvIDEpXG4gICAgICBjb25zdCBhbHBoYSA9XG4gICAgICAgIChjaGlsZEJyYW5jaFN0YXJ0IC0gc2VjdGlvbkluZGV4IC8gKHNlY3Rpb25zLmxlbmd0aCAtIDEpKSAvXG4gICAgICAgICgxIC8gKHNlY3Rpb25zLmxlbmd0aCAtIDEpKTtcblxuICAgICAgLy8gTGluZWFybHkgaW50ZXJwb2xhdGUgb3JpZ2luIGZyb20gc2VjdGlvbiBBIHRvIHNlY3Rpb24gQlxuICAgICAgY29uc3QgY2hpbGRCcmFuY2hPcmlnaW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpLmxlcnBWZWN0b3JzKFxuICAgICAgICBzZWN0aW9uQS5vcmlnaW4sXG4gICAgICAgIHNlY3Rpb25CLm9yaWdpbixcbiAgICAgICAgYWxwaGEsXG4gICAgICApO1xuXG4gICAgICAvLyBMaW5lYXJseSBpbnRlcnBvbGF0ZSByYWRpdXNcbiAgICAgIGNvbnN0IGNoaWxkQnJhbmNoUmFkaXVzID1cbiAgICAgICAgdGhpcy5wYXJhbXMuYnJhbmNoLnJhZGl1c1tsZXZlbF0gKlxuICAgICAgICAoKDEgLSBhbHBoYSkgKiBzZWN0aW9uQS5yYWRpdXMgKyBhbHBoYSAqIHNlY3Rpb25CLnJhZGl1cyk7XG5cbiAgICAgIC8vIExpbmVhcmxseSBpbnRlcnBvbGF0ZSB0aGUgb3JpZW50YXRpb25cbiAgICAgIGNvbnN0IHFBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIoc2VjdGlvbkEub3JpZW50YXRpb24pO1xuICAgICAgY29uc3QgcUIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihzZWN0aW9uQi5vcmllbnRhdGlvbik7XG4gICAgICBjb25zdCBwYXJlbnRPcmllbnRhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpLnNldEZyb21RdWF0ZXJuaW9uKFxuICAgICAgICBxQi5zbGVycChxQSwgYWxwaGEpLFxuICAgICAgKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZmZzZXQgZnJvbSB0aGUgcGFyZW50IGJyYW5jaCBhbmQgdGhlIHJhZGlhbCBhbmdsZVxuICAgICAgY29uc3QgcmFkaWFsQW5nbGUgPSAyLjAgKiBNYXRoLlBJICogKHJhZGlhbE9mZnNldCArIGkgLyBjb3VudCk7XG4gICAgICBjb25zdCBxMSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC5hbmdsZVtsZXZlbF0gLyAoMTgwIC8gTWF0aC5QSSksXG4gICAgICApO1xuICAgICAgY29uc3QgcTIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICByYWRpYWxBbmdsZSxcbiAgICAgICk7XG4gICAgICBjb25zdCBxMyA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKHBhcmVudE9yaWVudGF0aW9uKTtcblxuICAgICAgY29uc3QgY2hpbGRCcmFuY2hPcmllbnRhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpLnNldEZyb21RdWF0ZXJuaW9uKFxuICAgICAgICBxMy5tdWx0aXBseShxMi5tdWx0aXBseShxMSkpLFxuICAgICAgKTtcblxuICAgICAgbGV0IGNoaWxkQnJhbmNoTGVuZ3RoID1cbiAgICAgICAgdGhpcy5wYXJhbXMuYnJhbmNoLmxlbmd0aFtsZXZlbF0gKlxuICAgICAgICAodGhpcy5wYXJhbXMudHlwZSA9PT0gVHJlZVR5cGUuRXZlcmdyZWVuXG4gICAgICAgICAgPyAxLjAgLSBjaGlsZEJyYW5jaFN0YXJ0XG4gICAgICAgICAgOiAxLjApO1xuXG4gICAgICB0aGlzLmJyYW5jaFF1ZXVlLnB1c2goXG4gICAgICAgIG5ldyBCcmFuY2goXG4gICAgICAgICAgY2hpbGRCcmFuY2hPcmlnaW4sXG4gICAgICAgICAgY2hpbGRCcmFuY2hPcmllbnRhdGlvbixcbiAgICAgICAgICBjaGlsZEJyYW5jaExlbmd0aCxcbiAgICAgICAgICBjaGlsZEJyYW5jaFJhZGl1cyxcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICB0aGlzLnBhcmFtcy5icmFuY2guc2VjdGlvbnNbbGV2ZWxdLFxuICAgICAgICAgIHRoaXMucGFyYW1zLmJyYW5jaC5zZWdtZW50c1tsZXZlbF0sXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpYyBmb3Igc3Bhd25pbmcgY2hpbGQgYnJhbmNoZXMgZnJvbSBhIHBhcmVudCBicmFuY2gncyBzZWN0aW9uXG4gICAqIEBwYXJhbSB7e1xuICAqICBvcmlnaW46IFRIUkVFLlZlY3RvcjMsXG4gICogIG9yaWVudGF0aW9uOiBUSFJFRS5FdWxlcixcbiAgKiAgcmFkaXVzOiBudW1iZXJcbiAgKiB9W119IHNlY3Rpb25zIFRoZSBwYXJlbnQgYnJhbmNoJ3Mgc2VjdGlvbnNcbiAgKiBAcmV0dXJuc1xuICAqL1xuICBnZW5lcmF0ZUxlYXZlcyhzZWN0aW9ucykge1xuICAgIGNvbnN0IHJhZGlhbE9mZnNldCA9IHRoaXMucm5nLnJhbmRvbSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtcy5sZWF2ZXMuY291bnQ7IGkrKykge1xuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBmYXIgYWxvbmcgdGhlIGxlbmd0aCBvZiB0aGUgcGFyZW50XG4gICAgICAvLyBicmFuY2ggdGhlIGxlYWYgc2hvdWxkIG9yaWdpbmF0ZSBmcm9tICgwIHRvIDEpXG4gICAgICBsZXQgbGVhZlN0YXJ0ID0gdGhpcy5ybmcucmFuZG9tKDEuMCwgdGhpcy5wYXJhbXMubGVhdmVzLnN0YXJ0KTtcblxuICAgICAgLy8gRmluZCB3aGljaCBzZWN0aW9ucyBhcmUgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGNoaWxkIGJyYW5jaCBvcmlnaW4gcG9pbnRcbiAgICAgIC8vIHNvIHdlIGNhbiBkZXRlcm1pbmUgdGhlIG9yaWdpbiwgb3JpZW50YXRpb24gYW5kIHJhZGl1cyBvZiB0aGUgYnJhbmNoXG4gICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSBNYXRoLmZsb29yKGxlYWZTdGFydCAqIChzZWN0aW9ucy5sZW5ndGggLSAxKSk7XG4gICAgICBsZXQgc2VjdGlvbkEsIHNlY3Rpb25CO1xuICAgICAgc2VjdGlvbkEgPSBzZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xuICAgICAgaWYgKHNlY3Rpb25JbmRleCA9PT0gc2VjdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzZWN0aW9uQiA9IHNlY3Rpb25BO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VjdGlvbkIgPSBzZWN0aW9uc1tzZWN0aW9uSW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBub3JtYWxpemVkIGRpc3RhbmNlIGZyb20gc2VjdGlvbiBBIHRvIHNlY3Rpb24gQiAoMCB0byAxKVxuICAgICAgY29uc3QgYWxwaGEgPVxuICAgICAgICAobGVhZlN0YXJ0IC0gc2VjdGlvbkluZGV4IC8gKHNlY3Rpb25zLmxlbmd0aCAtIDEpKSAvXG4gICAgICAgICgxIC8gKHNlY3Rpb25zLmxlbmd0aCAtIDEpKTtcblxuICAgICAgLy8gTGluZWFybHkgaW50ZXJwb2xhdGUgb3JpZ2luIGZyb20gc2VjdGlvbiBBIHRvIHNlY3Rpb24gQlxuICAgICAgY29uc3QgbGVhZk9yaWdpbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkubGVycFZlY3RvcnMoXG4gICAgICAgIHNlY3Rpb25BLm9yaWdpbixcbiAgICAgICAgc2VjdGlvbkIub3JpZ2luLFxuICAgICAgICBhbHBoYSxcbiAgICAgICk7XG5cbiAgICAgIC8vIExpbmVhcmxseSBpbnRlcnBvbGF0ZSB0aGUgb3JpZW50YXRpb25cbiAgICAgIGNvbnN0IHFBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIoc2VjdGlvbkEub3JpZW50YXRpb24pO1xuICAgICAgY29uc3QgcUIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihzZWN0aW9uQi5vcmllbnRhdGlvbik7XG4gICAgICBjb25zdCBwYXJlbnRPcmllbnRhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpLnNldEZyb21RdWF0ZXJuaW9uKFxuICAgICAgICBxQi5zbGVycChxQSwgYWxwaGEpLFxuICAgICAgKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZmZzZXQgZnJvbSB0aGUgcGFyZW50IGJyYW5jaCBhbmQgdGhlIHJhZGlhbCBhbmdsZVxuICAgICAgY29uc3QgcmFkaWFsQW5nbGUgPSAyLjAgKiBNYXRoLlBJICogKHJhZGlhbE9mZnNldCArIGkgLyB0aGlzLnBhcmFtcy5sZWF2ZXMuY291bnQpO1xuICAgICAgY29uc3QgcTEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICB0aGlzLnBhcmFtcy5sZWF2ZXMuYW5nbGUgLyAoMTgwIC8gTWF0aC5QSSksXG4gICAgICApO1xuICAgICAgY29uc3QgcTIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICByYWRpYWxBbmdsZSxcbiAgICAgICk7XG4gICAgICBjb25zdCBxMyA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKHBhcmVudE9yaWVudGF0aW9uKTtcblxuICAgICAgY29uc3QgbGVhZk9yaWVudGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKCkuc2V0RnJvbVF1YXRlcm5pb24oXG4gICAgICAgIHEzLm11bHRpcGx5KHEyLm11bHRpcGx5KHExKSksXG4gICAgICApO1xuXG4gICAgICB0aGlzLmdlbmVyYXRlTGVhZihsZWFmT3JpZ2luLCBsZWFmT3JpZW50YXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogR2VuZXJhdGVzIGEgbGVhdmVzXG4gKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjN9IG9yaWdpbiBUaGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGJyYW5jaFxuICogQHBhcmFtIHtUSFJFRS5FdWxlcn0gb3JpZW50YXRpb24gVGhlIHN0YXJ0aW5nIG9yaWVudGF0aW9uIG9mIHRoZSBicmFuY2hcbiAqL1xuICBnZW5lcmF0ZUxlYWYob3JpZ2luLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBpID0gdGhpcy5sZWF2ZXMudmVydHMubGVuZ3RoIC8gMztcblxuICAgIC8vIFdpZHRoIGFuZCBsZW5ndGggb2YgdGhlIGxlYWYgcXVhZFxuICAgIGxldCBsZWFmU2l6ZSA9XG4gICAgICB0aGlzLnBhcmFtcy5sZWF2ZXMuc2l6ZSAqXG4gICAgICAoMSArXG4gICAgICAgIHRoaXMucm5nLnJhbmRvbShcbiAgICAgICAgICB0aGlzLnBhcmFtcy5sZWF2ZXMuc2l6ZVZhcmlhbmNlLFxuICAgICAgICAgIC10aGlzLnBhcmFtcy5sZWF2ZXMuc2l6ZVZhcmlhbmNlLFxuICAgICAgICApKTtcblxuICAgIGNvbnN0IFcgPSBsZWFmU2l6ZTtcbiAgICBjb25zdCBMID0gMS41ICogbGVhZlNpemU7XG5cbiAgICBjb25zdCBjcmVhdGVMZWFmID0gKHJvdGF0aW9uKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgcXVhZCB2ZXJ0aWNlc1xuICAgICAgY29uc3QgdiA9IFtcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLVcgLyAyLCBMLCAwKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLVcgLyAyLCAwLCAwKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoVyAvIDIsIDAsIDApLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhXIC8gMiwgTCwgMCksXG4gICAgICBdLm1hcCgodikgPT5cbiAgICAgICAgdlxuICAgICAgICAgIC5hcHBseUV1bGVyKG5ldyBUSFJFRS5FdWxlcigwLCByb3RhdGlvbiwgMCkpXG4gICAgICAgICAgLmFwcGx5RXVsZXIob3JpZW50YXRpb24pXG4gICAgICAgICAgLmFkZChvcmlnaW4pLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5sZWF2ZXMudmVydHMucHVzaChcbiAgICAgICAgdlswXS54LFxuICAgICAgICB2WzBdLnksXG4gICAgICAgIHZbMF0ueixcbiAgICAgICAgdlsxXS54LFxuICAgICAgICB2WzFdLnksXG4gICAgICAgIHZbMV0ueixcbiAgICAgICAgdlsyXS54LFxuICAgICAgICB2WzJdLnksXG4gICAgICAgIHZbMl0ueixcbiAgICAgICAgdlszXS54LFxuICAgICAgICB2WzNdLnksXG4gICAgICAgIHZbM10ueixcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG4gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKS5hcHBseUV1bGVyKG9yaWVudGF0aW9uKTtcbiAgICAgIHRoaXMubGVhdmVzLm5vcm1hbHMucHVzaChcbiAgICAgICAgbi54LFxuICAgICAgICBuLnksXG4gICAgICAgIG4ueixcbiAgICAgICAgbi54LFxuICAgICAgICBuLnksXG4gICAgICAgIG4ueixcbiAgICAgICAgbi54LFxuICAgICAgICBuLnksXG4gICAgICAgIG4ueixcbiAgICAgICAgbi54LFxuICAgICAgICBuLnksXG4gICAgICAgIG4ueixcbiAgICAgICk7XG4gICAgICB0aGlzLmxlYXZlcy51dnMucHVzaCgwLCAxLCAwLCAwLCAxLCAwLCAxLCAxKTtcbiAgICAgIHRoaXMubGVhdmVzLmluZGljZXMucHVzaChpLCBpICsgMSwgaSArIDIsIGksIGkgKyAyLCBpICsgMyk7XG4gICAgICBpICs9IDQ7XG4gICAgfTtcblxuICAgIGNyZWF0ZUxlYWYoMCk7XG4gICAgaWYgKHRoaXMucGFyYW1zLmxlYXZlcy5iaWxsYm9hcmQgPT09IEJpbGxib2FyZC5Eb3VibGUpIHtcbiAgICAgIGNyZWF0ZUxlYWYoTWF0aC5QSSAvIDIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIGluZGljZXMgZm9yIGJyYW5jaCBnZW9tZXRyeVxuICAgKiBAcGFyYW0ge0JyYW5jaH0gYnJhbmNoXG4gICAqL1xuICBnZW5lcmF0ZUJyYW5jaEluZGljZXMoaW5kZXhPZmZzZXQsIGJyYW5jaCkge1xuICAgIC8vIEJ1aWxkIGdlb21ldHJ5IGVhY2ggc2VjdGlvbiBvZiB0aGUgYnJhbmNoIChjeWxpbmRlciB3aXRob3V0IGVuZCBjYXBzKVxuICAgIGxldCB2MSwgdjIsIHYzLCB2NDtcbiAgICBjb25zdCBOID0gYnJhbmNoLnNlZ21lbnRDb3VudCArIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuY2guc2VjdGlvbkNvdW50OyBpKyspIHtcbiAgICAgIC8vIEJ1aWxkIHRoZSBxdWFkIGZvciBlYWNoIHNlZ21lbnQgb2YgdGhlIHNlY3Rpb25cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnJhbmNoLnNlZ21lbnRDb3VudDsgaisrKSB7XG4gICAgICAgIHYxID0gaW5kZXhPZmZzZXQgKyBpICogTiArIGo7XG4gICAgICAgIC8vIFRoZSBsYXN0IHNlZ21lbnQgd3JhcHMgYXJvdW5kIGJhY2sgdG8gdGhlIHN0YXJ0aW5nIHNlZ21lbnQsIHNvIG9taXQgaiArIDEgdGVybVxuICAgICAgICB2MiA9IGluZGV4T2Zmc2V0ICsgaSAqIE4gKyAoaiArIDEpO1xuICAgICAgICB2MyA9IHYxICsgTjtcbiAgICAgICAgdjQgPSB2MiArIE47XG4gICAgICAgIHRoaXMuYnJhbmNoZXMuaW5kaWNlcy5wdXNoKHYxLCB2MywgdjIsIHYyLCB2MywgdjQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIGdlb21ldHJ5IGZvciB0aGUgYnJhbmNoZXNcbiAgICovXG4gIGNyZWF0ZUJyYW5jaGVzR2VvbWV0cnkoKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKFxuICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0aGlzLmJyYW5jaGVzLnZlcnRzKSwgMyksXG4gICAgKTtcbiAgICBnLnNldEF0dHJpYnV0ZShcbiAgICAgICdub3JtYWwnLFxuICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnJhbmNoZXMubm9ybWFscyksIDMpLFxuICAgICk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoXG4gICAgICAndXYnLFxuICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnJhbmNoZXMudXZzKSwgMiksXG4gICAgKTtcbiAgICBnLnNldEluZGV4KFxuICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgVWludDE2QXJyYXkodGhpcy5icmFuY2hlcy5pbmRpY2VzKSwgMSksXG4gICAgKTtcbiAgICBnLmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuXG4gICAgY29uc3QgbWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIG5hbWU6ICdicmFuY2hlcycsXG4gICAgICBmbGF0U2hhZGluZzogdGhpcy5wYXJhbXMuZmxhdFNoYWRpbmcsXG4gICAgICBjb2xvcjogdGhpcy5wYXJhbXMudGludCxcbiAgICB9KTtcblxuICAgIHRoaXMuYnJhbmNoZXNNZXNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLmJyYW5jaGVzTWVzaC5nZW9tZXRyeSA9IGc7XG4gICAgdGhpcy5icmFuY2hlc01lc2gubWF0ZXJpYWwuZGlzcG9zZSgpO1xuICAgIHRoaXMuYnJhbmNoZXNNZXNoLm1hdGVyaWFsID0gbWF0O1xuICAgIHRoaXMuYnJhbmNoZXNNZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgIHRoaXMuYnJhbmNoZXNNZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLnRleHR1cmVkKSB7XG4gICAgICB0aGlzLmJyYW5jaGVzTWVzaC5tYXRlcmlhbC5hb01hcCA9IGxvYWRUZXh0dXJlKHRleHR1cmVzLmJhcmtbdGhpcy5wYXJhbXMuYmFyay50eXBlXS5hbywgdGhpcy5wYXJhbXMuYmFyay5zY2FsZSk7XG4gICAgICB0aGlzLmJyYW5jaGVzTWVzaC5tYXRlcmlhbC5tYXAgPSBsb2FkVGV4dHVyZSh0ZXh0dXJlcy5iYXJrW3RoaXMucGFyYW1zLmJhcmsudHlwZV0uY29sb3IsIHRoaXMucGFyYW1zLmJhcmsuc2NhbGUpO1xuICAgICAgdGhpcy5icmFuY2hlc01lc2gubWF0ZXJpYWwubm9ybWFsTWFwID0gbG9hZFRleHR1cmUodGV4dHVyZXMuYmFya1t0aGlzLnBhcmFtcy5iYXJrLnR5cGVdLm5vcm1hbCwgdGhpcy5wYXJhbXMuYmFyay5zY2FsZSk7XG4gICAgICB0aGlzLmJyYW5jaGVzTWVzaC5tYXRlcmlhbC5yb3VnaG5lc3NNYXAgPSBsb2FkVGV4dHVyZSh0ZXh0dXJlcy5iYXJrW3RoaXMucGFyYW1zLmJhcmsudHlwZV0ucm91Z2huZXNzLCB0aGlzLnBhcmFtcy5iYXJrLnNjYWxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBnZW9tZXRyeSBmb3IgdGhlIGxlYXZlc1xuICAgKi9cbiAgY3JlYXRlTGVhdmVzR2VvbWV0cnkoKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKFxuICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0aGlzLmxlYXZlcy52ZXJ0cyksIDMpLFxuICAgICk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoXG4gICAgICAndXYnLFxuICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRoaXMubGVhdmVzLnV2cyksIDIpLFxuICAgICk7XG4gICAgZy5zZXRJbmRleChcbiAgICAgIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IFVpbnQxNkFycmF5KHRoaXMubGVhdmVzLmluZGljZXMpLCAxKSxcbiAgICApO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBnLmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuXG4gICAgY29uc3QgbWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIG5hbWU6ICdsZWF2ZXMnLFxuICAgICAgY29sb3I6IHRoaXMucGFyYW1zLmxlYXZlcy50aW50LFxuICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgYWxwaGFUZXN0OiB0aGlzLnBhcmFtcy5sZWF2ZXMuYWxwaGFUZXN0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5sZWF2ZXNNZXNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLmxlYXZlc01lc2guZ2VvbWV0cnkgPSBnO1xuICAgIHRoaXMubGVhdmVzTWVzaC5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gICAgdGhpcy5sZWF2ZXNNZXNoLm1hdGVyaWFsID0gbWF0O1xuICAgIHRoaXMubGVhdmVzTWVzaC5tYXRlcmlhbC5tYXAgPSBsb2FkVGV4dHVyZSh0ZXh0dXJlcy5sZWF2ZXNbdGhpcy5wYXJhbXMubGVhdmVzLnR5cGVdKTtcbiAgICB0aGlzLmxlYXZlc01lc2guY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgdGhpcy5sZWF2ZXNNZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUk5HIiwic2VlZCIsIl9fcHVibGljRmllbGQiLCJtYXgiLCJtaW4iLCJyZXN1bHQiLCJCcmFuY2giLCJvcmlnaW4iLCJUSFJFRSIsIm9yaWVudGF0aW9uIiwibGVuZ3RoIiwicmFkaXVzIiwibGV2ZWwiLCJzZWN0aW9uQ291bnQiLCJzZWdtZW50Q291bnQiLCJCYXJrVHlwZSIsIkJpbGxib2FyZCIsIkxlYWZUeXBlIiwiVHJlZVR5cGUiLCJUcmVlUGFyYW1zIiwidGV4dHVyZUNhY2hlIiwidGV4dHVyZUxvYWRlciIsImxvYWRUZXh0dXJlIiwicGF0aCIsInNjYWxlIiwidGV4dHVyZSIsInVybCIsIlRyZWUiLCJwYXJhbXMiLCJicmFuY2giLCJpbmRleE9mZnNldCIsInNlY3Rpb25PcmllbnRhdGlvbiIsInNlY3Rpb25PcmlnaW4iLCJzZWN0aW9uTGVuZ3RoIiwic2VjdGlvbnMiLCJpIiwic2VjdGlvblJhZGl1cyIsImZpcnN0IiwiaiIsImFuZ2xlIiwidmVydGV4Iiwibm9ybWFsIiwidXYiLCJnbmFybGluZXNzIiwicVNlY3Rpb24iLCJxVHdpc3QiLCJxRm9yY2UiLCJsYXN0U2VjdGlvbiIsImNvdW50IiwicmFkaWFsT2Zmc2V0IiwiY2hpbGRCcmFuY2hTdGFydCIsInNlY3Rpb25JbmRleCIsInNlY3Rpb25BIiwic2VjdGlvbkIiLCJhbHBoYSIsImNoaWxkQnJhbmNoT3JpZ2luIiwiY2hpbGRCcmFuY2hSYWRpdXMiLCJxQSIsInFCIiwicGFyZW50T3JpZW50YXRpb24iLCJyYWRpYWxBbmdsZSIsInExIiwicTIiLCJxMyIsImNoaWxkQnJhbmNoT3JpZW50YXRpb24iLCJjaGlsZEJyYW5jaExlbmd0aCIsImxlYWZTdGFydCIsImxlYWZPcmlnaW4iLCJsZWFmT3JpZW50YXRpb24iLCJsZWFmU2l6ZSIsIlciLCJMIiwiY3JlYXRlTGVhZiIsInJvdGF0aW9uIiwidiIsIm4iLCJ2MSIsInYyIiwidjMiLCJ2NCIsIk4iLCJnIiwibWF0IiwidGV4dHVyZXMuYmFyayIsInRleHR1cmVzLmxlYXZlcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEVBQUk7QUFBQSxFQUt2QixZQUFZQyxHQUFNO0FBSmxCLElBQUFDLEVBQUEsYUFBTTtBQUNOLElBQUFBLEVBQUEsYUFBTTtBQUNOLElBQUFBLEVBQUEsY0FBTztBQUdMLFNBQUssTUFBTyxZQUFZRCxJQUFRLEtBQUssTUFDckMsS0FBSyxNQUFPLFlBQVlBLElBQVEsS0FBSztBQUFBLEVBQ3RDO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLRCxPQUFPRSxJQUFNLEdBQUdDLElBQU0sR0FBRztBQUN2QixTQUFLLE1BQU8sU0FBUyxLQUFLLE1BQU0sVUFBVSxLQUFLLE9BQU8sTUFBTyxLQUFLLE1BQ2xFLEtBQUssTUFBTyxRQUFTLEtBQUssTUFBTSxVQUFVLEtBQUssT0FBTyxNQUFPLEtBQUs7QUFDbEUsUUFBSUMsS0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLE1BQU0sV0FBWTtBQUN6RCxXQUFBQSxLQUFVLGFBRUZGLElBQU1DLEtBQU9DLElBQVNEO0FBQUEsRUFDL0I7QUFDSDtBQ25CTyxNQUFNRSxFQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFsQixZQUNFQyxJQUFTLElBQUlDLEVBQU0sUUFBUyxHQUM1QkMsSUFBYyxJQUFJRCxFQUFNLE1BQU8sR0FDL0JFLElBQVMsR0FDVEMsSUFBUyxHQUNUQyxJQUFRLEdBQ1JDLElBQWUsR0FDZkMsSUFBZSxHQUNmO0FBQ0EsU0FBSyxTQUFTUCxFQUFPLFNBQ3JCLEtBQUssY0FBY0UsRUFBWSxTQUMvQixLQUFLLFNBQVNDLEdBQ2QsS0FBSyxTQUFTQyxHQUNkLEtBQUssUUFBUUMsR0FDYixLQUFLLGVBQWVDLEdBQ3BCLEtBQUssZUFBZUM7QUFBQSxFQUNyQjtBQUNIO0FDM0JZLE1BQUNDLElBQVc7QUFBQSxFQUN0QixPQUFPO0FBQUEsRUFDUCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ1YsR0FFYUMsSUFBWTtBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFDVixHQUVhQyxJQUFXO0FBQUEsRUFDdEIsS0FBSztBQUFBLEVBQ0wsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsS0FBSztBQUNQLEdBRWFDLElBQVc7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQ2IsR0NyQmFDLElBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixNQUFNRCxFQUFTO0FBQUE7QUFBQSxFQUdmLE1BQU07QUFBQTtBQUFBLEVBR04sYUFBYTtBQUFBO0FBQUEsRUFHYixVQUFVO0FBQUE7QUFBQSxFQUdWLFFBQVE7QUFBQTtBQUFBLEVBR1IsTUFBTTtBQUFBO0FBQUEsSUFFSixNQUFNO0FBQUE7QUFBQSxJQUdOLE9BQU87QUFBQSxFQUNSO0FBQUE7QUFBQSxFQUdELFFBQVE7QUFBQTtBQUFBLElBR04sT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBLE1BQ1IsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsT0FBTztBQUFBLE1BQ0wsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFHO0FBQUEsTUFDL0IsVUFBVTtBQUFBLElBQ1g7QUFBQTtBQUFBLElBR0QsWUFBWTtBQUFBLE1BQ1YsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsUUFBUTtBQUFBLE1BQ04sR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsUUFBUTtBQUFBLE1BQ04sR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBLE1BQ1IsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBLE1BQ1IsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQTtBQUFBLElBR0QsT0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLElBQ0o7QUFBQSxF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
