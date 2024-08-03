import Script from 'next/script'

export default function AsiaOrangio() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="21e68dca-3463-420d-8cb2-f4da46f2f5a2"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/21e68dca-3463-420d-8cb2-f4da46f2f5a2/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
