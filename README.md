# Animation-Easings

A plain javascript and zero-dependency lib extracted from [jquery.easing](https://github.com/gdsmith/jquery.easing/) to compute animation easings.


## Usage

```shell
npm i animation-easings --save
```

```js
import easing from 'animation-easings';

const x = easing('easeOutExpo', 0.5);
```

or you can import perticular easing functions like below:

```js
import { easingOutExpo } from 'animation-easings';

const x = easingOutExpo(0.5);
```

## API

### easing(easing, x)

* `easing` easing function
* `x` animation fraction, from 0 to 1

Easing functions:

* swing
* easeInQuad
* easeOutQuad
* easeInOutQuad
* easeInCubic
* easeOutCubic
* easeInOutCubic
* easeInQuart
* easeOutQuart
* easeInOutQuart
* easeInQuint
* easeOutQuint
* easeInOutQuint
* easeInSine
* easeOutSine
* easeInOutSine
* easeInExpo
* easeOutExpo
* easeInOutExpo
* easeInCirc
* easeOutCirc
* easeInOutCirc
* easeInElastic
* easeOutElastic
* easeInOutElastic
* easeInBack
* easeOutBack
* easeInOutBack
* easeInBounce
* easeOutBounce
* easeInOutBounce
