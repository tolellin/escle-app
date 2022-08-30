"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpService = void 0;
const core_1 = require("@angular/core");
let HelpService = class HelpService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3306';
    }
    getHelps() {
        return this.http.get(`${this.API_URI}/help`);
    }
    getHelp(id) {
        return this.http.get(`${this.API_URI}/help/${id}`);
    }
    saveHelp(help) {
        return this.http.post(`${this.API_URI}/help`, help);
    }
    deleteHelp(id) {
        return this.http.delete(`${this.API_URI}/help/${id}`);
    }
    updateHelp(id, help) {
        return this.http.put(`${this.API_URI}/help/${id}`, help);
    }
};
HelpService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], HelpService);
exports.HelpService = HelpService;
