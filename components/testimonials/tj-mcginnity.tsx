import Script from 'next/script'

export default function TJMcGinnity() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="3114eae6-20e7-4611-8741-ea04add52438"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/3114eae6-20e7-4611-8741-ea04add52438/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
