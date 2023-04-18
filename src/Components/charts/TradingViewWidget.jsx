// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ screen }) {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_07f01') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "BINANCE:BTCUSDT",
                        interval: "1",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        allow_symbol_change: false,
                        container_id: "tradingview_07f01",
                        withdateranges: true,
                        // hide_legend: true,
                    });
                }
            }
        },
        []
    );

    return (
        <div className='tradingview-widget-container'>
            <div id='tradingview_07f01' style={{ height: screen === "home" ? "300px" : "600px" }}></div>
        </div>
    );
}
