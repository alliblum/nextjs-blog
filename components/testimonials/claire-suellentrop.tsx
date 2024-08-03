import Script from 'next/script'

export default function ClaireSuellentrop() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="f4e0413b-0a75-48aa-843b-a3899b25ced8"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/f4e0413b-0a75-48aa-843b-a3899b25ced8/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
