import { syntax } from './micromark-details/index.js';
import { fromMarkdownDetails } from './mdast-util-details/index.js';
let warningIssued = false;
const remarkDetails = function () {
    var _a, _b, _c, _d;
    const data = this.data();
    // warning for old remarks
    if (!warningIssued && (((_b = (_a = this.Parser) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b.blockTokenizers) || ((_d = (_c = this.Compiler) === null || _c === void 0 ? void 0 : _c.prototype) === null || _d === void 0 ? void 0 : _d.visitors))) {
        warningIssued = true;
        console.warn('[remark-details] Warning: please upgrade to remark 13 to use this plugin');
    }
    function add(field, value) {
        /* istanbul ignore if - other extensions. */
        if (data[field])
            data[field].push(value);
        else
            data[field] = [value];
    }
    add('micromarkExtensions', syntax);
    add('fromMarkdownExtensions', fromMarkdownDetails);
};
export default remarkDetails;
