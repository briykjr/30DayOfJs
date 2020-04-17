const scrollAnchor = ( ) => {
    const navLinks = document.querySelectorAll( 'a' );
  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }
  
  scrollAnchor( );
  