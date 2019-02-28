/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Bank account card component.
 */
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
var NgxBankAccountBrComponent = /** @class */ (function () {
    function NgxBankAccountBrComponent() {
        this.banks = [{ 'label': 'BANCO ABN AMRO REAL S.A. (REAL)', 'value': '356' }, { 'label': 'BANCO ACOMERCIAL E DE INVESTIMENTO SUDAMERIS S.A. (SUDAMERIS)', 'value': '215' }, { 'label': 'BANCO ALFA S.A (ALFA)', 'value': '025' }, { 'label': 'BANCO BBM S.A (BBM)', 'value': '107' }, { 'label': 'BANCO BMG S.A. (BMG)', 'value': '318' }, { 'label': 'BANCO BRADESCO S.A. (BRADESCO)', 'value': '237' }, { 'label': 'BANCO CACIQUE S. A. (CACIQUE)', 'value': '263' }, { 'label': 'BANCO CITIBANK S.A.', 'value': '745' }, { 'label': 'BANCO COOPERATIVO DO BRASIL S.A. - (BANCOOB)', 'value': '756' }, { 'label': 'BANCO COOPERATIVO SICREDI S.A. (SICREDI)', 'value': '748' }, { 'label': 'BANCO CRUZEIRO DO SUL S.A. (CRUZEIRO DO SUL)', 'value': '229' }, { 'label': 'BANCO DA AMAZONIA S.A. (BANCO DA AMAZÔNIA (BASA))', 'value': '003' }, { 'label': 'BANCO DE BRASÍLIA S.A. (BRB)', 'value': '070' }, { 'label': 'BANCO DO BRASIL S.A. (BANCO DO BRASIL)', 'value': '001' }, { 'label': 'BANCO DO ESTADO DE SANTA CATARINA S.A.', 'value': '027' }, { 'label': 'BANCO DO ESTADO DE SERGIPE S.A (BANESE)', 'value': '047' }, { 'label': 'BANCO DO ESTADO DO PARÁ S/A. (BANPARÁ)', 'value': '037' }, { 'label': 'BANCO DO ESTADO DO RIO GRANDE DO SUL S.A. (BANRISUL)', 'value': '041' }, { 'label': 'BANCO DO NORDESTE DO BRASIL S.A (BANCO DO NORDESTE (BNB) )', 'value': '004' }, { 'label': 'BANCO FININVEST S.A. (FININVEST)', 'value': '252' }, { 'label': 'BANCO IBI S.A - BANCO MULTIPLO (BANCO IBI)', 'value': '063' }, { 'label': 'BANCO INTERMEDIUM S.A.', 'value': '077' }, { 'label': 'BANCO ITAU S.A. (ITAÚ)', 'value': '341' }, { 'label': 'BANCO ITAUBANK S.A.', 'value': '479' }, { 'label': 'BANCO MERCANTIL DO BRASIL S.A. (MERCANTIL DO BRASIL)', 'value': '389' }, { 'label': 'BANCO NOSSA CAIXA S.A (NOSSA CAIXA)', 'value': '151' }, { 'label': 'BANCO ORIGINAL', 'value': '212' }, { 'label': 'BANCO PANAMERICANO S.A. (PANAMERICANO)', 'value': '623' }, { 'label': 'BANCO RENDIMENTO S.A. (BANCO RENDIMENTO)', 'value': '633' }, { 'label': 'BANCO SAFRA S.A. (SAFRA)', 'value': '422' }, { 'label': 'BANCO SANTANDER S.A. (SANTANDER BANESPA)', 'value': '033' }, { 'label': 'BANCO SIMPLES S.A. (BANCO SIMPLES)', 'value': '749' }, { 'label': 'BANCO UBS PACTUAL S.A.', 'value': '208' }, { 'label': 'BANCO UNICRED', 'value': '136' }, { 'label': 'BANCO VOTORANTIM S.A (VOTORANTIM)', 'value': '655' }, { 'label': 'BANESTES S.A BANCO DO ESTADO DO ESPIRITO SANTO (BANESTES)', 'value': '021' }, { 'label': 'BANIF - BANCO INTERNACIONAL DO FUNCHAL (BRASIL), S.A. (BANIF)', 'value': '719' }, { 'label': 'BPN BRASIL BANCO MÚLTIPLO S.A. (BPN)', 'value': '069' }, { 'label': 'CAIXA ECONOMICA FEDERAL (CAIXA ECONÔMICA FEDERAL)', 'value': '104' }, { 'label': 'CECRED-COOPERATIVA CENTRAL DE CREDITO URBANO', 'value': '085' }, { 'label': 'CONFEDERAÇÂO NACIONAL DAS COOPERATIVAS CENTRAIS UNICREDS', 'value': '136' }, { 'label': 'HSBC BANK BRASIL S.A.BANCO MULTIPLO (HSBC)', 'value': '399' }, { 'label': 'LEMON BANK BANCO MÚLTIPLO S..A (LEMON BANK)', 'value': '065' }, { 'label': 'UNIBANCO UNIAO DE BANCOS BRASILEIROS S.A. (UNIBANCO)', 'value': '409' }];
    }
    /**
     * @return {?}
     */
    NgxBankAccountBrComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgxBankAccountBrComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-bank-account-br',
                    template: "<article bank-account-card max-width-container *ngIf=\"account\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\">\n            <section>\n                <section bank-container>\n                    <label>\n                        Banco:\n                    </label>\n                    <select required account-bank name=\"bankNumber\" [(ngModel)]=\"account.bankNumber\">\n                        <option *ngFor=\"let bank of banks; let index = index;\" [value]=\"bank.value\" [selected]=\"index == 0\">\n                            {{bank.label}}\n                        </option>\n                    </select>\n                </section>\n                <label>\n                    N\u00FAmero da conta:\n                </label>\n                <input required type=\"tel\" account-number name=\"accountNumber\" mask=\"9999999999999999999999999\"\n                    [(ngModel)]=\"account.accountNumber\" placeholder=\"12349123913\">\n                <label account-number-divider>-</label>\n                <input required type=\"tel\" account-check-number name=\"accountCheckNumber\" mask=\"9\" [(ngModel)]=\"account.accountCheckNumber\"\n                    placeholder=\"1\">\n            </section>\n            <section cardholder-container>\n                <label>\n                    Titular:\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"account.holder.fullname\"\n                    placeholder=\"John Hall\" />\n            </section>\n            <section agency-container>\n                <label>\n                    Ag\u00EAncia\n                </label>\n                <input required account-agency-number placeholder=\"1234\" name=\"agencyNumber\" [(ngModel)]=\"account.agencyNumber\"\n                    type=\"tel\">\n                <span agency-number-divider>-</span>\n                <input required account-agency-check placeholder=\"1\" name=\"agencyCheckNumber\" [(ngModel)]=\"account.agencyCheckNumber\"\n                    type=\"tel\">\n            </section>\n        </form>\n    </article>\n</article>",
                    styles: ["[bank-account-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[bank-account-card] *{transition-property:all;transition-duration:.3s}[bank-account-card] [card-cvc]{width:6rem;margin-bottom:0}[bank-account-card] [card-back],[bank-account-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1e99e5 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[bank-account-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[bank-account-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[bank-account-card] [account-number]{display:inline-block;width:80%}[bank-account-card] [account-number-divider]{display:inline-block;text-align:center;width:10%}[bank-account-card] [account-check-number]{display:inline-block;width:10%}[bank-account-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[bank-account-card] [card-token]{display:none}[bank-account-card] [cardholder-container]{width:75%;display:inline-block}[bank-account-card] [cardholder-container] [card-holder]{width:90%}[bank-account-card] [bank-container]{width:100%;display:inline-block}[bank-account-card] [bank-container] select{width:100%}[bank-account-card] [agency-container]{width:25%;display:inline-block}[bank-account-card] [agency-container] [account-agency-number]{text-align:center;max-width:55%;margin-right:5%;padding-left:.5rem;padding-right:.5rem}[bank-account-card] [agency-container] [account-agency-divider]{max-width:2%}[bank-account-card] [agency-container] [account-agency-check]{margin-left:5%;padding-left:.5rem;padding-right:.5rem;text-align:center;max-width:30%}[bank-account-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[bank-account-card] [next-button]{margin-top:2rem}[bank-account-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[bank-account-card] input,[bank-account-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[bank-account-card] select{padding:0;text-align:center}[bank-account-card] select option{background-color:#fff;font-weight:700;color:#444}[bank-account-card] input::-webkit-input-placeholder{color:#79c2f0}[bank-account-card] input::-moz-placeholder{color:#79c2f0}[bank-account-card] input:-ms-input-placeholder{color:#79c2f0}[bank-account-card] input:-moz-placeholder{color:#79c2f0}[bank-account-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}"]
                }] }
    ];
    NgxBankAccountBrComponent.ctorParameters = function () { return []; };
    NgxBankAccountBrComponent.propDecorators = {
        account: [{ type: Input, args: ['account',] }],
        form: [{ type: ViewChild, args: ['accountForm',] }]
    };
    return NgxBankAccountBrComponent;
}());
export { NgxBankAccountBrComponent };
if (false) {
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.account;
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.form;
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.banks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhbmstYWNjb3VudC1ici5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibGliL25neC1iYW5rLWFjY291bnQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRXZDO0lBVUk7UUFEQSxVQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsK0RBQStELEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsOENBQThDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFF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QUFpRDs7aUJBRXBEOzs7OzBCQUdJLEtBQUssU0FBQyxTQUFTO3VCQUNmLFNBQVMsU0FBQyxhQUFhOztJQUk1QixnQ0FBQztDQUFBLEFBWkQsSUFZQztTQU5ZLHlCQUF5Qjs7O0lBQ2xDLDRDQUE4Qjs7SUFDOUIseUNBQXNDOztJQUN0QywwQ0FBd2dHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBCYW5rIGFjY291bnQgY2FyZCBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1iYW5rLWFjY291bnQtYnInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LWJhbmstYWNjb3VudC1ici5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1iYW5rLWFjY291bnQtYnIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neEJhbmtBY2NvdW50QnJDb21wb25lbnQge1xuICAgIEBJbnB1dCgnYWNjb3VudCcpIGFjY291bnQ6IGFueVxuICAgIEBWaWV3Q2hpbGQoJ2FjY291bnRGb3JtJykgZm9ybTogTmdGb3JtXG4gICAgYmFua3MgPSBbeyAnbGFiZWwnOiAnQkFOQ08gQUJOIEFNUk8gUkVBTCBTLkEuIChSRUFMKScsICd2YWx1ZSc6ICczNTYnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIEFDT01FUkNJQUwgRSBERSBJTlZFU1RJTUVOVE8gU1VEQU1FUklTIFMuQS4gKFNVREFNRVJJUyknLCAndmFsdWUnOiAnMjE1JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBBTEZBIFMuQSAoQUxGQSknLCAndmFsdWUnOiAnMDI1JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBCQk0gUy5BIChCQk0pJywgJ3ZhbHVlJzogJzEwNycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQk1HIFMuQS4gKEJNRyknLCAndmFsdWUnOiAnMzE4JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBCUkFERVNDTyBTLkEuIChCUkFERVNDTyknLCAndmFsdWUnOiAnMjM3JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBDQUNJUVVFIFMuIEEuIChDQUNJUVVFKScsICd2YWx1ZSc6ICcyNjMnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIENJVElCQU5LIFMuQS4nLCAndmFsdWUnOiAnNzQ1JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBDT09QRVJBVElWTyBETyBCUkFTSUwgUy5BLiAtIChCQU5DT09CKScsICd2YWx1ZSc6ICc3NTYnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIENPT1BFUkFUSVZPIFNJQ1JFREkgUy5BLiAoU0lDUkVESSknLCAndmFsdWUnOiAnNzQ4JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBDUlVaRUlSTyBETyBTVUwgUy5BLiAoQ1JVWkVJUk8gRE8gU1VMKScsICd2YWx1ZSc6ICcyMjknIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERBIEFNQVpPTklBIFMuQS4gKEJBTkNPIERBIEFNQVrDlE5JQSAoQkFTQSkpJywgJ3ZhbHVlJzogJzAwMycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gREUgQlJBU8ONTElBIFMuQS4gKEJSQiknLCAndmFsdWUnOiAnMDcwJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBETyBCUkFTSUwgUy5BLiAoQkFOQ08gRE8gQlJBU0lMKScsICd2YWx1ZSc6ICcwMDEnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERPIEVTVEFETyBERSBTQU5UQSBDQVRBUklOQSBTLkEuJywgJ3ZhbHVlJzogJzAyNycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gRE8gRVNUQURPIERFIFNFUkdJUEUgUy5BIChCQU5FU0UpJywgJ3ZhbHVlJzogJzA0NycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gRE8gRVNUQURPIERPIFBBUsOBIFMvQS4gKEJBTlBBUsOBKScsICd2YWx1ZSc6ICcwMzcnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERPIEVTVEFETyBETyBSSU8gR1JBTkRFIERPIFNVTCBTLkEuIChCQU5SSVNVTCknLCAndmFsdWUnOiAnMDQxJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBETyBOT1JERVNURSBETyBCUkFTSUwgUy5BIChCQU5DTyBETyBOT1JERVNURSAoQk5CKSApJywgJ3ZhbHVlJzogJzAwNCcgfSwgeyAnbGFiZWwnOiAnQkFOQ08gRklOSU5WRVNUIFMuQS4gKEZJTklOVkVTVCknLCAndmFsdWUnOiAnMjUyJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBJQkkgUy5BIC0gQkFOQ08gTVVMVElQTE8gKEJBTkNPIElCSSknLCAndmFsdWUnOiAnMDYzJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBJTlRFUk1FRElVTSBTLkEuJywgJ3ZhbHVlJzogJzA3NycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gSVRBVSBTLkEuIChJVEHDmiknLCAndmFsdWUnOiAnMzQxJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBJVEFVQkFOSyBTLkEuJywgJ3ZhbHVlJzogJzQ3OScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gTUVSQ0FOVElMIERPIEJSQVNJTCBTLkEuIChNRVJDQU5USUwgRE8gQlJBU0lMKScsICd2YWx1ZSc6ICczODknIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIE5PU1NBIENBSVhBIFMuQSAoTk9TU0EgQ0FJWEEpJywgJ3ZhbHVlJzogJzE1MScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gT1JJR0lOQUwnLCAndmFsdWUnOiAnMjEyJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBQQU5BTUVSSUNBTk8gUy5BLiAoUEFOQU1FUklDQU5PKScsICd2YWx1ZSc6ICc2MjMnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIFJFTkRJTUVOVE8gUy5BLiAoQkFOQ08gUkVORElNRU5UTyknLCAndmFsdWUnOiAnNjMzJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBTQUZSQSBTLkEuIChTQUZSQSknLCAndmFsdWUnOiAnNDIyJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBTQU5UQU5ERVIgUy5BLiAoU0FOVEFOREVSIEJBTkVTUEEpJywgJ3ZhbHVlJzogJzAzMycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gU0lNUExFUyBTLkEuIChCQU5DTyBTSU1QTEVTKScsICd2YWx1ZSc6ICc3NDknIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIFVCUyBQQUNUVUFMIFMuQS4nLCAndmFsdWUnOiAnMjA4JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBVTklDUkVEJywgJ3ZhbHVlJzogJzEzNicgfSwgeyAnbGFiZWwnOiAnQkFOQ08gVk9UT1JBTlRJTSBTLkEgKFZPVE9SQU5USU0pJywgJ3ZhbHVlJzogJzY1NScgfSwgeyAnbGFiZWwnOiAnQkFORVNURVMgUy5BIEJBTkNPIERPIEVTVEFETyBETyBFU1BJUklUTyBTQU5UTyAoQkFORVNURVMpJywgJ3ZhbHVlJzogJzAyMScgfSwgeyAnbGFiZWwnOiAnQkFOSUYgLSBCQU5DTyBJTlRFUk5BQ0lPTkFMIERPIEZVTkNIQUwgKEJSQVNJTCksIFMuQS4gKEJBTklGKScsICd2YWx1ZSc6ICc3MTknIH0sIHsgJ2xhYmVsJzogJ0JQTiBCUkFTSUwgQkFOQ08gTcOaTFRJUExPIFMuQS4gKEJQTiknLCAndmFsdWUnOiAnMDY5JyB9LCB7ICdsYWJlbCc6ICdDQUlYQSBFQ09OT01JQ0EgRkVERVJBTCAoQ0FJWEEgRUNPTsOUTUlDQSBGRURFUkFMKScsICd2YWx1ZSc6ICcxMDQnIH0sIHsgJ2xhYmVsJzogJ0NFQ1JFRC1DT09QRVJBVElWQSBDRU5UUkFMIERFIENSRURJVE8gVVJCQU5PJywgJ3ZhbHVlJzogJzA4NScgfSwgeyAnbGFiZWwnOiAnQ09ORkVERVJBw4fDgk8gTkFDSU9OQUwgREFTIENPT1BFUkFUSVZBUyBDRU5UUkFJUyBVTklDUkVEUycsICd2YWx1ZSc6ICcxMzYnIH0sIHsgJ2xhYmVsJzogJ0hTQkMgQkFOSyBCUkFTSUwgUy5BLkJBTkNPIE1VTFRJUExPIChIU0JDKScsICd2YWx1ZSc6ICczOTknIH0sIHsgJ2xhYmVsJzogJ0xFTU9OIEJBTksgQkFOQ08gTcOaTFRJUExPIFMuLkEgKExFTU9OIEJBTkspJywgJ3ZhbHVlJzogJzA2NScgfSwgeyAnbGFiZWwnOiAnVU5JQkFOQ08gVU5JQU8gREUgQkFOQ09TIEJSQVNJTEVJUk9TIFMuQS4gKFVOSUJBTkNPKScsICd2YWx1ZSc6ICc0MDknIH1dXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBuZ09uSW5pdCgpIHsgfVxufVxuIl19