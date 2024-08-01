import Box from '@chakra-ui/react'

// export default function EmailForm() {
//   return (
//     <form
//       action="https://buttondown.email/api/emails/embed-subscribe/alli"
//       method="post"
//       target="popupwindow"
//       onSubmit={() =>
//         "window.open('https://buttondown.email/alli', 'popupwindow')"
//       }
//       className="embeddable-buttondown-form"
//     >
//       <label htmlFor="bd-email">Enter your email</label>
//       <input type="email" name="email" id="bd-email" />

//       <input type="submit" value="Subscribe" />
//       {/* <p>
//         <a href="https://buttondown.email/refer/alli" target="_blank">
//           Powered by Buttondown.
//         </a>
//       </p> */}
//     </form>
//   )
// }

export default function EmailForm() {
  return (
    <div>
      <iframe
        scrolling="no"
        style={
          'width:100%!important;height:220px;border:1px #ccc solid !important'
        }
        src="https://buttondown.email/alli?as_embed=true"
      ></iframe>
      <br />
      <br />
    </div>
  )
}
