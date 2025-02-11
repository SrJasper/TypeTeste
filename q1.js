"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Items = [
    { name: 'pedra', value: 1 },
    { name: 'corda', value: 2 },
    { name: 'agua', value: 5 }
];
function packSize() {
    return new Promise(function (resolve) {
        rl.question('Digite o tamanho da mochila: ', function (InputPackSize) {
            var pack = parseFloat(InputPackSize);
            if (isNaN(pack)) {
                console.log('Digite um valor válido');
                resolve(packSize());
            }
            else {
                resolve(pack);
            }
        });
    });
}
function BiggerItem() {
    var biggerItem = 0;
    var itemList = Object.values(Items);
    var itemToRemove;
    return new Promise(function (resolve) {
        for (var i = 0; i < Object.keys(Items).length; i++) {
            if (biggerItem < itemList[i].value) {
                biggerItem = itemList[i].value;
                itemToRemove = i;
            }
            else if (Object.keys(Items).length === 0) {
                resolve(0);
            }
        }
        Items.splice(itemToRemove);
        resolve(biggerItem);
    });
}
var mochila = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pack, packSizeLeft, itemList, biggerItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, packSize()];
            case 1:
                pack = _a.sent();
                packSizeLeft = pack;
                itemList = Object.values(Items);
                return [4 /*yield*/, BiggerItem()];
            case 2:
                biggerItem = _a.sent();
                _a.label = 3;
            case 3:
                if (!(biggerItem !== 0)) return [3 /*break*/, 7];
                if (!(packSizeLeft < biggerItem)) return [3 /*break*/, 5];
                return [4 /*yield*/, BiggerItem()];
            case 4:
                biggerItem = _a.sent();
                return [3 /*break*/, 6];
            case 5:
                packSizeLeft = packSizeLeft - biggerItem;
                console.log(biggerItem);
                _a.label = 6;
            case 6: return [3 /*break*/, 3];
            case 7: return [2 /*return*/];
        }
    });
}); };
mochila();
