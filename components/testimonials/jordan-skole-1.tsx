import Script from 'next/script'

export default function JordanSkole1() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="43fc7dcd-5853-4f25-981e-7a13c95fed45"
        data-mode="shadow"
        data-lazyload="false"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/43fc7dcd-5853-4f25-981e-7a13c95fed45/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
