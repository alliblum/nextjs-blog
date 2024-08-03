import Script from 'next/script'

export default function JordanSkole2() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="886695eb-9689-420d-bb54-a588bd1dec9c"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/886695eb-9689-420d-bb54-a588bd1dec9c/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
