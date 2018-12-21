/*!
* Contains code from jquery.easing
* BSD License
* https://github.com/gdsmith/jquery.easing/
*/
var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + .75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + .9375;
	} else {
		return n1*(x-=(2.625/d1))*x + .984375;
	}
}

export default function(easing, x) {
    easing = easing.toLowerCase();
    switch (easing) {
        case 'swing':
        return swing(x);
        case 'easeinquad':
        return easeInQuad(x);
        case 'easeoutquad':
        return easeOutQuad(x);
        case 'easeinoutquad':
        return easeInOutQuad(x);
        case 'easeincubic':
        return easeInCubic(x);
        case 'easeoutcubic':
        return easeOutCubic(x);
        case 'easeinoutcubic':
        return easeInOutCubic(x);
        case 'easeinquart':
        return easeInQuart(x);
        case 'easeoutquart':
        return easeOutQuart(x);
        case 'easeinoutquart':
        return easeInOutQuart(x);
        case 'easeinquint':
        return easeInQuint(x);
        case 'easeoutquint':
        return easeOutQuint(x);
        case 'easeinoutquint':
        return easeInOutQuint(x);
        case 'easeinsine':
        return easeInSine(x);
        case 'easeoutsine':
        return easeOutSine(x);
        case 'easeinoutsine':
        return easeInOutSine(x);
        case 'easeinexpo':
        return easeInExpo(x);
        case 'easeoutexpo':
        return easeOutExpo(x);
        case 'easeinoutexpo':
        return easeInOutExpo(x);
        case 'easeincirc':
        return easeInCirc(x);
        case 'easeoutcirc':
        return easeOutCirc(x);
        case 'easeinoutcirc':
        return easeInOutCirc(x);
        case 'easeinelastic':
        return easeInElastic(x);
        case 'easeoutelastic':
        return easeOutElastic(x);
        case 'easeinoutelastic':
        return easeInOutElastic(x);
        case 'easeinback':
        return easeInBack(x);
        case 'easeoutback':
        return easeOutBack(x);
        case 'easeinoutback':
        return easeInOutBack(x);
        case 'easeinbounce':
        return easeInBounce(x);
        case 'easeoutbounce':
        return easeOutBounce(x);
        case 'easeinoutbounce':
        return easeInOutBounce(x);
    }
    throw new Error('Unsupported easing function:' + easing);
}

export function swing(x) {
	return easeInQuad(x);
}
export function easeInQuad(x) {
	return x * x;
}
export function easeOutQuad(x) {
	return 1 - ( 1 - x ) * ( 1 - x );
}
export function easeInOutQuad(x) {
	return x < 0.5 ?
		2 * x * x :
		1 - pow( -2 * x + 2, 2 ) / 2;
}
export function easeInCubic(x) {
	return x * x * x;
}
export function easeOutCubic(x) {
	return 1 - pow( 1 - x, 3 );
}
export function easeInOutCubic(x) {
	return x < 0.5 ?
		4 * x * x * x :
		1 - pow( -2 * x + 2, 3 ) / 2;
}
export function easeInQuart(x) {
	return x * x * x * x;
}
export function easeOutQuart(x) {
	return 1 - pow( 1 - x, 4 );
}
export function easeInOutQuart(x) {
	return x < 0.5 ?
		8 * x * x * x * x :
		1 - pow( -2 * x + 2, 4 ) / 2;
}
export function easeInQuint(x) {
	return x * x * x * x * x;
}
export function easeOutQuint(x) {
	return 1 - pow( 1 - x, 5 );
}
export function easeInOutQuint(x) {
	return x < 0.5 ?
		16 * x * x * x * x * x :
		1 - pow( -2 * x + 2, 5 ) / 2;
}
export function easeInSine(x) {
	return 1 - cos( x * PI/2 );
}
export function easeOutSine(x) {
	return sin( x * PI/2 );
}
export function easeInOutSine(x) {
	return -( cos( PI * x ) - 1 ) / 2;
}
export function easeInExpo(x) {
	return x === 0 ? 0 : pow( 2, 10 * x - 10 );
}
export function easeOutExpo(x) {
	return x === 1 ? 1 : 1 - pow( 2, -10 * x );
}
export function easeInOutExpo(x) {
	return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
		pow( 2, 20 * x - 10 ) / 2 :
		( 2 - pow( 2, -20 * x + 10 ) ) / 2;
}
export function easeInCirc(x) {
	return 1 - sqrt( 1 - pow( x, 2 ) );
}
export function easeOutCirc(x) {
	return sqrt( 1 - pow( x - 1, 2 ) );
}
export function easeInOutCirc(x) {
	return x < 0.5 ?
		( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
		( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
}
export function easeInElastic(x) {
	return x === 0 ? 0 : x === 1 ? 1 :
		-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
}
export function easeOutElastic(x) {
	return x === 0 ? 0 : x === 1 ? 1 :
		pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
}
export function easeInOutElastic(x) {
	return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
		-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
		pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
}
export function easeInBack(x) {
	return c3 * x * x * x - c1 * x * x;
}
export function easeOutBack(x) {
	return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
}
export function easeInOutBack(x) {
	return x < 0.5 ?
		( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
		( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
}
export function easeInBounce(x) {
	return 1 - bounceOut( 1 - x );
}

export function easeOutBounce(x) {
    return bounceOut(x);
}
export function easeInOutBounce(x) {
	return x < 0.5 ?
		( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
		( 1 + bounceOut( 2 * x - 1 ) ) / 2;
}
