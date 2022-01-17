(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{402:function(e,t,a){"use strict";a.r(t);var r=a(5),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fees-on-terra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees-on-terra"}},[e._v("#")]),e._v(" Fees on Terra")]),e._v(" "),a("p",[e._v("On the Terra network, all transactions incur a gas fee. Transactions involving stablecoins incur additional fees depending on the type of transaction being made. The following table explains which extra fee is added to the different types of stablecoin transactions:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[a("a",{attrs:{href:"#gas"}},[e._v("Gas")])]),e._v(" "),a("th",[a("a",{attrs:{href:"#tobin-tax"}},[e._v("Tobin")])]),e._v(" "),a("th",[a("a",{attrs:{href:"#spread-fee"}},[e._v("Spread")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/Concepts/glossary.html#market-swap"}},[e._v("Market swaps")]),e._v(" between stablecoins")],1),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/Concepts/glossary.html#market-swap"}},[e._v("Market swaps")]),e._v(" between stablecoins and Luna")],1),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("x")])])])]),e._v(" "),a("p",[e._v("All other transactions only incur the gas fee.\nTerraswap or other dApps may charge their own transaction fees on top of Terra network fees.")]),e._v(" "),a("h2",{attrs:{id:"gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" Gas")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Concepts/glossary.html#fees"}},[e._v("Gas")]),e._v(" is a small computational fee that covers the cost of processing a transaction. Gas is estimated and added to every transaction in Terra Station. Any transaction that does not contain enough gas will not process.\nGas on Terra works differently than it works on other blockchains:")],1),e._v(" "),a("ul",[a("li",[e._v("Validators can set their own minimum gas fees.")]),e._v(" "),a("li",[e._v("Most transactions will estimate more than the minimum amount of gas, ensuring the transaction gets completed.")]),e._v(" "),a("li",[e._v("Unused gas is not refunded.")]),e._v(" "),a("li",[e._v("Transactions are not queued based on gas amounts, but in the order received.")])]),e._v(" "),a("p",[e._v("For an in-depth explanation of how gas fees are calculated, visit the "),a("RouterLink",{attrs:{to:"/Reference/terrad/#fees"}},[e._v("terrad reference")]),e._v(" page.")],1),e._v(" "),a("p",[e._v("To view current gas rates in your browser, visit the "),a("a",{attrs:{href:"https://fcd.terra.dev/v1/txs/gas_prices",target:"_blank",rel:"noopener noreferrer"}},[e._v("gas rates"),a("OutboundLink")],1),e._v(" FCD page.")]),e._v(" "),a("h2",{attrs:{id:"tobin-tax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tobin-tax"}},[e._v("#")]),e._v(" Tobin tax")]),e._v(" "),a("p",[e._v("The Tobin tax is a fixed percentage fee added to any "),a("RouterLink",{attrs:{to:"/Concepts/glossary.html#market-swap"}},[e._v("market swap")]),e._v(" between Terra stablecoin denominations. The rate varies depending on each Terra stablecoin. For example, while the rate for most denominations is .35%, the rate for MNT is 2%. To see the Tobin tax rates, "),a("a",{attrs:{href:"https://lcd.terra.dev/terra/oracle/v1beta1/denoms/tobin_taxes",target:"_blank",rel:"noopener noreferrer"}},[e._v("query the oracle"),a("OutboundLink")],1),e._v(". When stablecoins have different Tobin tax rates, the higher tax rate will be used for the transaction.")],1),e._v(" "),a("p",[e._v("The Tobin tax was created to discourage front-running the oracle and foreign exchange trading at the expense of users. For more information on the implementation of the Tobin tax, read "),a("a",{attrs:{href:"https://medium.com/terra-money/on-swap-fees-the-greedy-and-the-wise-b967f0c8914e",target:"_blank",rel:"noopener noreferrer"}},[e._v('"On swap fees: the greedy and the wise"'),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"spread-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spread-fee"}},[e._v("#")]),e._v(" Spread fee")]),e._v(" "),a("p",[e._v("Spread fees are added to any "),a("RouterLink",{attrs:{to:"/Concepts/glossary.html#market-swap"}},[e._v("market swap")]),e._v(" between Terra and Luna. The minimum spread fee is .5%. During times of extreme volatility, the market module adjusts the spread fee to maintain a "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-market.html#market-making-algorithm"}},[e._v("constant product")]),e._v(" between the size of the Terra pool and the fiat value of the Luna pool, ensuring stability in the protocol. As the pools reach constant product equilibrium, The spread rate returns to a normal value.")],1),e._v(" "),a("p",[e._v("For more information on spread fees, visit the "),a("RouterLink",{attrs:{to:"/Reference/Terra-core/Module-specifications/spec-market.html"}},[e._v("market module")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"changes-to-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-fees"}},[e._v("#")]),e._v(" Changes to fees")]),e._v(" "),a("p",[e._v("On January 6th, 2022, the Terra community passed "),a("a",{attrs:{href:"https://station.terra.money/proposal/172",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposal 172"),a("OutboundLink")],1),e._v(", which was a parameter change proposal to change the stability fee tax rate to zero. This tax used to be charged on any transaction using Terra stablecoins, excluding market swaps. This fee is no longer charged.")])])}),[],!1,null,null,null);t.default=s.exports}}]);