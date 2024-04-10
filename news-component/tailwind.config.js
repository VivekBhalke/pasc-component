/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'divBesideNews' : ' #3E3232',
        'buttonBackground': '#F5F5F5',

        'cardBackgorund' :' #FFFFFF',
        'lastDivInCard' : ' #F5F5F5',
        'secondButtonBackground' : '#DDDDDD'

      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'], // 'CustomFont' should match the font name you're using
      },
      fontWeight: {
        fiveHundered: '500', 
        fourHundered : '400',// You can set any value you want here
      },
      textColor: {
        buttonText: '#3E3232', 
        'cardFirstText' : '#3E3232',
        'cardSecondText' : ' #3E3232BF',
        'cardFirstPara' : '#3E3232' ,
        'cardSecondPara' : '#3E3232BF',
        'secondButton' : '#3E3232BF',
      },
      letterSpacing: {
       'cardSecondText' : '0.20px',
       'firstPara' : '0.1px',
       'secondPara' : '0.25px',
      },
    },
  },
  plugins: [],
}