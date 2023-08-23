import localFont from 'next/font/local';

export const PaladinsExpandedFont = localFont({
  src: [
    {
      path:'./PaladinsExpanded.ttf',
      style: 'normal',
      weight:'100'
    },

    // {
    //   path:'./PaladinsExpanded1.ttf',
    //   style: 'normal',
    //   weight:'200'
    // },
    // {
    //   path:'./PaladinsExpanded2.ttf',
    //   style: 'normal',
    //   weight:'300'
    // },
    // {
    //   path:'./PaladinsExpanded3.ttf',
    //   style: 'normal',
    //   weight:'400'
    // }


  ],
  display: 'swap',
  variable: '--font-PaladinsExpanded',
})

/**
 * 根据 weight 进行判断使用哪种字体
 */


/**
100  Thin
200 - Extra Light (Ultra Light)
300 - Light
400 - Regular (Normal、Book、Roman)
500 - Medium
600 - Semi Bold (Demi Bold)
700 - Bold
800 - Extra Bold (Ultra Bold)
900 - Black (Heavy)
*/

/**
.customFont {
  font-size: 40px;
  color: red;
  font-family:var(--font-PaladinsExpanded)
  weight:200 // PaladinsExpanded1
  weight:300 // PaladinsExpanded2
  weight:400 // PaladinsExpanded3
}

export const CustomFont = styled.div`
  height:44px;
  font-family: var(--font-PaladinsExpanded);
  color:#000
`
*/