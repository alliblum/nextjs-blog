import Script from 'next/script'

export default function RamliJohn() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="d4cf98d3-2f59-4217-b2b5-8b4a2978d00a"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/d4cf98d3-2f59-4217-b2b5-8b4a2978d00a/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
