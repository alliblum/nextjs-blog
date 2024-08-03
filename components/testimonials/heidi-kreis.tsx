import Script from 'next/script'

export default function HeidiKreis() {
  return (
    <main>
      <div
        className="senja-embed"
        data-id="33295d0c-fb7d-4ab0-89d6-66bba3c56cf0"
        data-mode="shadow"
        data-lazyload="false"
        // style="display: block;"
      ></div>
      {/* This changed from <script> to <Script> */}
      <Script
        async
        src="https://widget.senja.io/widget/33295d0c-fb7d-4ab0-89d6-66bba3c56cf0/platform.js"
        type="text/javascript"
      ></Script>
    </main>
  )
}
