import { Box } from '@chakra-ui/react'

export default function EmailForm() {
  return (
    <div>
      <iframe
        scrolling="no"
        style={{
          width: '100%',
          height: '220',
          border: '1px',
          overflow: 'hidden',
        }}
        // style="width:100%!important;height:220px;border:1px #ccc solid !important"
        src="https://buttondown.email/alli?as_embed=true"
      ></iframe>
      <br />
      <br />
    </div>
  )
}
