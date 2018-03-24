var express = require("express");
var router = express.Router({mergeParams: true});
var scheme = require("./scheme");

router.get("/", scheme.index);

router.get("/:branch", scheme.branch);

router.get("/:branch/tree", scheme.tree);
router.get("/:branch/tree/*", scheme.itemTree);

router.get("/:branch/commits", scheme.commits);
router.get("/:branch/commits/:commit", scheme.commit);
router.get("/:branch/commits/:commit/*", scheme.commitTree);

module.exports = router;
