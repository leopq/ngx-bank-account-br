/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Bank account card component.
 */
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class NgxBankAccountBrComponent {
    constructor() {
        this.banks = [{ 'label': 'BANCO ABN AMRO REAL S.A. (REAL)', 'value': '356' }, { 'label': 'BANCO ACOMERCIAL E DE INVESTIMENTO SUDAMERIS S.A. (SUDAMERIS)', 'value': '215' }, { 'label': 'BANCO ALFA S.A (ALFA)', 'value': '025' }, { 'label': 'BANCO BBM S.A (BBM)', 'value': '107' }, { 'label': 'BANCO BMG S.A. (BMG)', 'value': '318' }, { 'label': 'BANCO BRADESCO S.A. (BRADESCO)', 'value': '237' }, { 'label': 'BANCO CACIQUE S. A. (CACIQUE)', 'value': '263' }, { 'label': 'BANCO CITIBANK S.A.', 'value': '745' }, { 'label': 'BANCO COOPERATIVO DO BRASIL S.A. - (BANCOOB)', 'value': '756' }, { 'label': 'BANCO COOPERATIVO SICREDI S.A. (SICREDI)', 'value': '748' }, { 'label': 'BANCO CRUZEIRO DO SUL S.A. (CRUZEIRO DO SUL)', 'value': '229' }, { 'label': 'BANCO DA AMAZONIA S.A. (BANCO DA AMAZÔNIA (BASA))', 'value': '003' }, { 'label': 'BANCO DE BRASÍLIA S.A. (BRB)', 'value': '070' }, { 'label': 'BANCO DO BRASIL S.A. (BANCO DO BRASIL)', 'value': '001' }, { 'label': 'BANCO DO ESTADO DE SANTA CATARINA S.A.', 'value': '027' }, { 'label': 'BANCO DO ESTADO DE SERGIPE S.A (BANESE)', 'value': '047' }, { 'label': 'BANCO DO ESTADO DO PARÁ S/A. (BANPARÁ)', 'value': '037' }, { 'label': 'BANCO DO ESTADO DO RIO GRANDE DO SUL S.A. (BANRISUL)', 'value': '041' }, { 'label': 'BANCO DO NORDESTE DO BRASIL S.A (BANCO DO NORDESTE (BNB) )', 'value': '004' }, { 'label': 'BANCO FININVEST S.A. (FININVEST)', 'value': '252' }, { 'label': 'BANCO IBI S.A - BANCO MULTIPLO (BANCO IBI)', 'value': '063' }, { 'label': 'BANCO INTERMEDIUM S.A.', 'value': '077' }, { 'label': 'BANCO ITAU S.A. (ITAÚ)', 'value': '341' }, { 'label': 'BANCO ITAUBANK S.A.', 'value': '479' }, { 'label': 'BANCO MERCANTIL DO BRASIL S.A. (MERCANTIL DO BRASIL)', 'value': '389' }, { 'label': 'BANCO NOSSA CAIXA S.A (NOSSA CAIXA)', 'value': '151' }, { 'label': 'BANCO ORIGINAL', 'value': '212' }, { 'label': 'BANCO PANAMERICANO S.A. (PANAMERICANO)', 'value': '623' }, { 'label': 'BANCO RENDIMENTO S.A. (BANCO RENDIMENTO)', 'value': '633' }, { 'label': 'BANCO SAFRA S.A. (SAFRA)', 'value': '422' }, { 'label': 'BANCO SANTANDER S.A. (SANTANDER BANESPA)', 'value': '033' }, { 'label': 'BANCO SIMPLES S.A. (BANCO SIMPLES)', 'value': '749' }, { 'label': 'BANCO UBS PACTUAL S.A.', 'value': '208' }, { 'label': 'BANCO UNICRED', 'value': '136' }, { 'label': 'BANCO VOTORANTIM S.A (VOTORANTIM)', 'value': '655' }, { 'label': 'BANESTES S.A BANCO DO ESTADO DO ESPIRITO SANTO (BANESTES)', 'value': '021' }, { 'label': 'BANIF - BANCO INTERNACIONAL DO FUNCHAL (BRASIL), S.A. (BANIF)', 'value': '719' }, { 'label': 'BPN BRASIL BANCO MÚLTIPLO S.A. (BPN)', 'value': '069' }, { 'label': 'CAIXA ECONOMICA FEDERAL (CAIXA ECONÔMICA FEDERAL)', 'value': '104' }, { 'label': 'CECRED-COOPERATIVA CENTRAL DE CREDITO URBANO', 'value': '085' }, { 'label': 'CONFEDERAÇÂO NACIONAL DAS COOPERATIVAS CENTRAIS UNICREDS', 'value': '136' }, { 'label': 'HSBC BANK BRASIL S.A.BANCO MULTIPLO (HSBC)', 'value': '399' }, { 'label': 'LEMON BANK BANCO MÚLTIPLO S..A (LEMON BANK)', 'value': '065' }, { 'label': 'UNIBANCO UNIAO DE BANCOS BRASILEIROS S.A. (UNIBANCO)', 'value': '409' }];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgxBankAccountBrComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-bank-account-br',
                template: "<article bank-account-card max-width-container *ngIf=\"account\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\">\n            <section>\n                <section bank-container>\n                    <label>\n                        Banco:\n                    </label>\n                    <select required account-bank name=\"bankNumber\" [(ngModel)]=\"account.bankNumber\">\n                        <option *ngFor=\"let bank of banks; let index = index;\" [value]=\"bank.value\" [selected]=\"index == 0\">\n                            {{bank.label}}\n                        </option>\n                    </select>\n                </section>\n                <label>\n                    N\u00FAmero da conta:\n                </label>\n                <input required type=\"tel\" account-number name=\"accountNumber\" mask=\"9999999999999999999999999\"\n                    [(ngModel)]=\"account.accountNumber\" placeholder=\"12349123913\">\n                <label account-number-divider>-</label>\n                <input required type=\"tel\" account-check-number name=\"accountCheckNumber\" mask=\"9\" [(ngModel)]=\"account.accountCheckNumber\"\n                    placeholder=\"1\">\n            </section>\n            <section cardholder-container>\n                <label>\n                    Titular:\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"account.holder.fullname\"\n                    placeholder=\"John Hall\" />\n            </section>\n            <section agency-container>\n                <label>\n                    Ag\u00EAncia\n                </label>\n                <input required account-agency-number placeholder=\"1234\" name=\"agencyNumber\" [(ngModel)]=\"account.agencyNumber\"\n                    type=\"tel\">\n                <span agency-number-divider>-</span>\n                <input required account-agency-check placeholder=\"1\" name=\"agencyCheckNumber\" [(ngModel)]=\"account.agencyCheckNumber\"\n                    type=\"tel\">\n            </section>\n        </form>\n    </article>\n</article>",
                styles: ["[bank-account-card]{padding-bottom:25px;max-width:400px;margin:auto}[bank-account-card] *{transition-property:all;transition-duration:.3s}[bank-account-card] [card-cvc]{width:60px;margin-bottom:0}[bank-account-card] [card-back],[bank-account-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1ea9e5 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:6px;padding:20px 30px 0;font-size:10px;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px 2px rgba(0,0,0,.2)}[bank-account-card] [card-front]{z-index:999;margin-top:-250px;margin-left:-20px}[bank-account-card] [card-back]{z-index:-2;padding:20px 0 0;margin-right:-20px}[bank-account-card] [account-number]{display:inline-block;width:80%}[bank-account-card] [account-number-divider]{display:inline-block;text-align:center;width:10%}[bank-account-card] [account-check-number]{display:inline-block;width:10%}[bank-account-card] [card-stripe]{width:100%;height:55px;background-color:rgba(0,0,0,.5);right:0}[bank-account-card] [card-token]{display:none}[bank-account-card] [cardholder-container]{width:75%;display:inline-block}[bank-account-card] [cardholder-container] [card-holder]{width:90%}[bank-account-card] [bank-container]{width:100%;display:inline-block}[bank-account-card] [bank-container] select{width:100%}[bank-account-card] [agency-container]{width:25%;display:inline-block}[bank-account-card] [agency-container] [account-agency-number]{text-align:center;max-width:55%;margin-right:5%;padding-left:5px;padding-right:5px}[bank-account-card] [agency-container] [account-agency-divider]{max-width:2%}[bank-account-card] [agency-container] [account-agency-check]{margin-left:5%;padding-left:5px;padding-right:5px;text-align:center;max-width:30%}[bank-account-card] [card-button]{border:2px solid #fff;display:block;padding:10px;color:#fff;float:right;border-radius:30px;background-color:#1e88e5}[bank-account-card] [next-button]{margin-top:20px}[bank-account-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-10px}[bank-account-card] input,[bank-account-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:30px;line-height:30px;padding:0 10px;margin:0 0 8px;color:#1e88e5;font-size:10px;box-sizing:border-box;border-radius:4px;letter-spacing:.7px}[bank-account-card] select{padding:0;text-align:center}[bank-account-card] select option{background-color:#fff;font-weight:700;color:#444}[bank-account-card] input::-webkit-input-placeholder{color:#79ccf0}[bank-account-card] input::-moz-placeholder{color:#79ccf0}[bank-account-card] input:-ms-input-placeholder{color:#79ccf0}[bank-account-card] input:-moz-placeholder{color:#79ccf0}[bank-account-card] label{display:block;margin:0 auto 7px;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}"]
            }] }
];
/** @nocollapse */
NgxBankAccountBrComponent.ctorParameters = () => [];
NgxBankAccountBrComponent.propDecorators = {
    account: [{ type: Input, args: ['account',] }],
    form: [{ type: ViewChild, args: ['accountForm',] }]
};
if (false) {
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.account;
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.form;
    /** @type {?} */
    NgxBankAccountBrComponent.prototype.banks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhbmstYWNjb3VudC1ici5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibGliL25neC1iYW5rLWFjY291bnQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBUXZDLE1BQU0sT0FBTyx5QkFBeUI7SUFJbEM7UUFEQSxVQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsK0RBQStELEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsOENBQThDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLG1EQUFtRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHNEQUFzRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSw0REFBNEQsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxzREFBc0QsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsMENBQTBDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSwyREFBMkQsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsK0RBQStELEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxtREFBbUQsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsOENBQThDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLDBEQUEwRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsNkNBQTZDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLHNEQUFzRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3gvRixDQUFDOzs7O0lBQ2pCLFFBQVEsS0FBSyxDQUFDOzs7WUFYakIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHV0RUFBaUQ7O2FBRXBEOzs7OztzQkFHSSxLQUFLLFNBQUMsU0FBUzttQkFDZixTQUFTLFNBQUMsYUFBYTs7OztJQUR4Qiw0Q0FBOEI7O0lBQzlCLHlDQUFzQzs7SUFDdEMsMENBQXdnRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQmFuayBhY2NvdW50IGNhcmQgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtYmFuay1hY2NvdW50LWJyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1iYW5rLWFjY291bnQtYnIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduZ3gtYmFuay1hY2NvdW50LWJyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hCYW5rQWNjb3VudEJyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoJ2FjY291bnQnKSBhY2NvdW50OiBhbnlcbiAgICBAVmlld0NoaWxkKCdhY2NvdW50Rm9ybScpIGZvcm06IE5nRm9ybVxuICAgIGJhbmtzID0gW3sgJ2xhYmVsJzogJ0JBTkNPIEFCTiBBTVJPIFJFQUwgUy5BLiAoUkVBTCknLCAndmFsdWUnOiAnMzU2JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBBQ09NRVJDSUFMIEUgREUgSU5WRVNUSU1FTlRPIFNVREFNRVJJUyBTLkEuIChTVURBTUVSSVMpJywgJ3ZhbHVlJzogJzIxNScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQUxGQSBTLkEgKEFMRkEpJywgJ3ZhbHVlJzogJzAyNScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQkJNIFMuQSAoQkJNKScsICd2YWx1ZSc6ICcxMDcnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIEJNRyBTLkEuIChCTUcpJywgJ3ZhbHVlJzogJzMxOCcgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQlJBREVTQ08gUy5BLiAoQlJBREVTQ08pJywgJ3ZhbHVlJzogJzIzNycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQ0FDSVFVRSBTLiBBLiAoQ0FDSVFVRSknLCAndmFsdWUnOiAnMjYzJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBDSVRJQkFOSyBTLkEuJywgJ3ZhbHVlJzogJzc0NScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQ09PUEVSQVRJVk8gRE8gQlJBU0lMIFMuQS4gLSAoQkFOQ09PQiknLCAndmFsdWUnOiAnNzU2JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBDT09QRVJBVElWTyBTSUNSRURJIFMuQS4gKFNJQ1JFREkpJywgJ3ZhbHVlJzogJzc0OCcgfSwgeyAnbGFiZWwnOiAnQkFOQ08gQ1JVWkVJUk8gRE8gU1VMIFMuQS4gKENSVVpFSVJPIERPIFNVTCknLCAndmFsdWUnOiAnMjI5JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBEQSBBTUFaT05JQSBTLkEuIChCQU5DTyBEQSBBTUFaw5ROSUEgKEJBU0EpKScsICd2YWx1ZSc6ICcwMDMnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERFIEJSQVPDjUxJQSBTLkEuIChCUkIpJywgJ3ZhbHVlJzogJzA3MCcgfSwgeyAnbGFiZWwnOiAnQkFOQ08gRE8gQlJBU0lMIFMuQS4gKEJBTkNPIERPIEJSQVNJTCknLCAndmFsdWUnOiAnMDAxJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBETyBFU1RBRE8gREUgU0FOVEEgQ0FUQVJJTkEgUy5BLicsICd2YWx1ZSc6ICcwMjcnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERPIEVTVEFETyBERSBTRVJHSVBFIFMuQSAoQkFORVNFKScsICd2YWx1ZSc6ICcwNDcnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIERPIEVTVEFETyBETyBQQVLDgSBTL0EuIChCQU5QQVLDgSknLCAndmFsdWUnOiAnMDM3JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBETyBFU1RBRE8gRE8gUklPIEdSQU5ERSBETyBTVUwgUy5BLiAoQkFOUklTVUwpJywgJ3ZhbHVlJzogJzA0MScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gRE8gTk9SREVTVEUgRE8gQlJBU0lMIFMuQSAoQkFOQ08gRE8gTk9SREVTVEUgKEJOQikgKScsICd2YWx1ZSc6ICcwMDQnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIEZJTklOVkVTVCBTLkEuIChGSU5JTlZFU1QpJywgJ3ZhbHVlJzogJzI1MicgfSwgeyAnbGFiZWwnOiAnQkFOQ08gSUJJIFMuQSAtIEJBTkNPIE1VTFRJUExPIChCQU5DTyBJQkkpJywgJ3ZhbHVlJzogJzA2MycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gSU5URVJNRURJVU0gUy5BLicsICd2YWx1ZSc6ICcwNzcnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIElUQVUgUy5BLiAoSVRBw5opJywgJ3ZhbHVlJzogJzM0MScgfSwgeyAnbGFiZWwnOiAnQkFOQ08gSVRBVUJBTksgUy5BLicsICd2YWx1ZSc6ICc0NzknIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIE1FUkNBTlRJTCBETyBCUkFTSUwgUy5BLiAoTUVSQ0FOVElMIERPIEJSQVNJTCknLCAndmFsdWUnOiAnMzg5JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBOT1NTQSBDQUlYQSBTLkEgKE5PU1NBIENBSVhBKScsICd2YWx1ZSc6ICcxNTEnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIE9SSUdJTkFMJywgJ3ZhbHVlJzogJzIxMicgfSwgeyAnbGFiZWwnOiAnQkFOQ08gUEFOQU1FUklDQU5PIFMuQS4gKFBBTkFNRVJJQ0FOTyknLCAndmFsdWUnOiAnNjIzJyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBSRU5ESU1FTlRPIFMuQS4gKEJBTkNPIFJFTkRJTUVOVE8pJywgJ3ZhbHVlJzogJzYzMycgfSwgeyAnbGFiZWwnOiAnQkFOQ08gU0FGUkEgUy5BLiAoU0FGUkEpJywgJ3ZhbHVlJzogJzQyMicgfSwgeyAnbGFiZWwnOiAnQkFOQ08gU0FOVEFOREVSIFMuQS4gKFNBTlRBTkRFUiBCQU5FU1BBKScsICd2YWx1ZSc6ICcwMzMnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIFNJTVBMRVMgUy5BLiAoQkFOQ08gU0lNUExFUyknLCAndmFsdWUnOiAnNzQ5JyB9LCB7ICdsYWJlbCc6ICdCQU5DTyBVQlMgUEFDVFVBTCBTLkEuJywgJ3ZhbHVlJzogJzIwOCcgfSwgeyAnbGFiZWwnOiAnQkFOQ08gVU5JQ1JFRCcsICd2YWx1ZSc6ICcxMzYnIH0sIHsgJ2xhYmVsJzogJ0JBTkNPIFZPVE9SQU5USU0gUy5BIChWT1RPUkFOVElNKScsICd2YWx1ZSc6ICc2NTUnIH0sIHsgJ2xhYmVsJzogJ0JBTkVTVEVTIFMuQSBCQU5DTyBETyBFU1RBRE8gRE8gRVNQSVJJVE8gU0FOVE8gKEJBTkVTVEVTKScsICd2YWx1ZSc6ICcwMjEnIH0sIHsgJ2xhYmVsJzogJ0JBTklGIC0gQkFOQ08gSU5URVJOQUNJT05BTCBETyBGVU5DSEFMIChCUkFTSUwpLCBTLkEuIChCQU5JRiknLCAndmFsdWUnOiAnNzE5JyB9LCB7ICdsYWJlbCc6ICdCUE4gQlJBU0lMIEJBTkNPIE3DmkxUSVBMTyBTLkEuIChCUE4pJywgJ3ZhbHVlJzogJzA2OScgfSwgeyAnbGFiZWwnOiAnQ0FJWEEgRUNPTk9NSUNBIEZFREVSQUwgKENBSVhBIEVDT07DlE1JQ0EgRkVERVJBTCknLCAndmFsdWUnOiAnMTA0JyB9LCB7ICdsYWJlbCc6ICdDRUNSRUQtQ09PUEVSQVRJVkEgQ0VOVFJBTCBERSBDUkVESVRPIFVSQkFOTycsICd2YWx1ZSc6ICcwODUnIH0sIHsgJ2xhYmVsJzogJ0NPTkZFREVSQcOHw4JPIE5BQ0lPTkFMIERBUyBDT09QRVJBVElWQVMgQ0VOVFJBSVMgVU5JQ1JFRFMnLCAndmFsdWUnOiAnMTM2JyB9LCB7ICdsYWJlbCc6ICdIU0JDIEJBTksgQlJBU0lMIFMuQS5CQU5DTyBNVUxUSVBMTyAoSFNCQyknLCAndmFsdWUnOiAnMzk5JyB9LCB7ICdsYWJlbCc6ICdMRU1PTiBCQU5LIEJBTkNPIE3DmkxUSVBMTyBTLi5BIChMRU1PTiBCQU5LKScsICd2YWx1ZSc6ICcwNjUnIH0sIHsgJ2xhYmVsJzogJ1VOSUJBTkNPIFVOSUFPIERFIEJBTkNPUyBCUkFTSUxFSVJPUyBTLkEuIChVTklCQU5DTyknLCAndmFsdWUnOiAnNDA5JyB9XVxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgbmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==