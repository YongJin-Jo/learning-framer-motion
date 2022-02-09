# FramerMotion
Framer Motion은 애니메이션을 쉽게 구현할 수 있게 해주는 라이브러리 입니다.

### 선언 방법

선언 방법은 앞에 `motion`을 `import`해서 `.`뒤에 HTML 태그를 붙여 주면 됩니다.

```html
<motion.div>
hello
</motion.div>
```

`styped-components`를 사용하는 경우 `steyld`함수안에 `import` 한  `motion`을 태그랑 같이 상속 해면 됩니다.

```tsx
const Warrper = styled(motion.div)`

`

function Motion(){
	return <Warrper></Warrper>
}
```

## Option

`motion`을 선언해서 만든 `motion` 태그는 여러 가지 `props`를 같습니다.

## initial, **Animate,** exit

initial, animate, exit 통해 애니메이션에 활동을 선언할 수 있습니다.

```tsx
<motion.div
inital={{sale:0,opacity:0}} //초기값
animate={{sale:1,opacity:1}} // 애니메이션 값
exit={{sale:0,opacity:0}} // 끝값
>
	
</motion.div>
```

## Transition

transition 을 통해 type, bounce, delay, duration등에 값을 줄 수 있습니다.

```tsx
<motion.div
inital={{sale:0,opacity:0}} //초기값
animate={{sale:1,opacity:1}} // 애니메이션 값
transition={{delay:1,duration:2}} //1초뒤에 2초동안 애니메이션 실행
>
	
</motion.div>
```

### delayChildren

Variants를 사용할 때 자식들에 transition의 지연시간을 선언해줄수 있는 옵션입니다.

### staggerChildren

Variants를 사용할 때 자식들에 transition의 변화를 시차를 줘서 움직일수 있게 해주는 옵션입니다.

💡staggerChildren를 0.2를 줬다고 하면 첫번째 자식은 0.2 초후에 시작하고, 두번째 자식은 0.4초후에 식자한다는 이야기 입니다.

## **Variants**

variants는 선언 방식을 사용하여 애니메이션을 조작하고 싶은 때 사용합니다.

선언 방법

```tsx
const boxVars = {
	value1:{{sale:0,opacity:0}}, 
	value2:{{sale:1,opacity:1}},
}

function Motion(){
	return (
		<motion.div
		variants={boxVars}
		inital="value1"
		animate="value2"
		>
			hello
		</motion.div>
)
}
```

`variants` 값이 선언되면 `inital,animate,exit`에 값들은 `variants` 에 선언한 값(`boxVars`)에 

property의 키값을 문자열 형태로 선언 해주시면 됩니다.

## **Gestures**

hover 같은 의사 클래스에 대한 애니메이션 효과를 부여하는 기능도 제공 합니다.

선언 방법

```tsx
const motionVars ={ //variants 정의
	hover:{scale:2,rotateZ:360},
	click:{scale:0.5,borderRadius:50px},
}

<motion.div
	whileHover="hover" //hover시 애니메이션 실행
		whileTab="click" // click 시 애니메이션 실행
>
hello
</motion.div>
```

## Drag

Drag 이벤트를 간편하게 해줍니다.

선언 방법

```tsx
// In pixels
<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 300 }}
/>

// As a ref to another component
const MyComponent = () => {
  const constraintsRef = useRef(null)

  return (
     <motion.div ref={constraintsRef}>
         <motion.div drag 
					whileDrag ={{scale:2}}	
					dragConstraints={constraintsRef} />
     </motion.div>
  )
}
```

`porps`에 `drag`를 선언 해주시면 사용 가능합니다. 또한 `whileDrag` 을 통해 Drag 이벤트를 하는 동한 적용할 애니메이션 선언도 가능합니다.

### dragConstraints

허용된 드래그 가능 영역에 구속 조건을 적용합니다. 

픽셀 단위로 사용되는 **`top`**, **`left`**, **`right`**, **`bottom`** 의 객체 값을 사용할 수 있습니다.

또한 `useRef()`를 통해 다른 구성 요소에 대한 참조를 허용할 수 있습니다.

## LayoutId

서로 다른 컴포넌트를 `LayoutId`를 통해 같은 컴포넌트로 합칠수 있습니다.

## Scroll

`scroll` 이벤트에 값은 `useViewPortScroll()`을 이용하여 사용 가능 합니다. 

`useViewPortScroll()` 는 총 4개에 값을 반환합니다.

- scrollX - 수평 스크롤의 거리를 pixel 값으로 반환합니다.
- scrollY - 수직 스크롤의 거리를 pixel 값으로 반환합니다.
- scrollXProgress - 수평 스크롤의 진행 값을 0 에서 1사이로 반환 합니다.
- scrollYProgress - 수직 스크롤의 반환 값을 0 에서 1 사이로 반환 합니다.

```tsx
const {scrollX,scrollY,scrollXProgress,scrollYProgress} = useViewPortScroll()
```

`useTransform`과 같이 사용하면 여러가지 애니메이션을 구현 가능합니다.

## MotionValue

### **useMotionValue**

motionValue는 선언힌 style의 값을 추적하는 hook 입니다.

```tsx
function MyComponent(){
	const motionValue = useMotionValue(0);
return(
<motion.div
//아래는 motionValue 값을 translateX값을 추적 하게끔 선언한 코드입니다.

	style={{ scale, translateX: motionValue }}
  initial={{ translateX: 0 }} //초기 값이 0부터 100까지 움직입니다.
  animate={{
          translateX: 100,
          transition: { duration: 1, yoyo: Infinity },
        }}
>
</motion.div>
)
}
```

이처럼 useMotionValue는 선언한 style 값을 실시간으로 추적하여 값을 

### **useTransform**

useTransfrom은 첫번째 인자로 들어간 변수에 값에 따라 아웃풋을 다르게 하는 hook입니다.
 

```tsx
function MyComponent(){
	const motionValue = useMotionValue(0);
	//첫 인자로 들어간 motionValue의 값에 따라 결과를 반환해 줍니다.
	//두번째 인자는 조건입니다, 세번째 인자는 결과값입니다.
	const transformValue = useTransform(motionValue, [0, 50, 100], [0.1, 1, 2]);
return(
<motion.div
//아래는 motionValue 값을 translateX값을 추적 하게끔 선언한 코드입니다.
//
	style={{ scale:transformValue, translateX: motionValue }} 
  initial={{ translateX: 0 }} //초기 값이 0부터 100까지 움직입니다.
  animate={{
          translateX: 100,
          transition: { duration: 1, yoyo: Infinity },
        }}
	>
</motion.div>
)
}
```

## AnimatePresence

컴포넌트의 애니메이션은 컴포넌트가 생성될때와 생성되고 나서에 애니메이션을 보여주는 것이다.

하지만 슬라이더같은 기능을 구현할때는 컴포넌트가 사라지기전에 애니메이션을 보여줘야 하지만

React에 경우 `true, flase`로 구현하기 때문에 Animation이 들어갈 시간이없다. 

이런 경우로 인해 순수 React로 애니메이션을 만들려면 정말 힘들것이다. 

`AnimatePresence`는 컴포넌트가 사라질때 애니메이션을 적용시킬수 있는 컴포넌트입니다.

### exit

```tsx

function MyComponent(){
const [vlaue,setValue] = useState(false);
const [customValue,setCustomValue] = useState(false);

const onClick = ()=>{ 
	setCustomValue(prev => !prev)
	setValue(prev => !prev)
}
return(
<>
<AnimatePresence custom={customValue}>
	{value && <motion.div
	custom={customValue}
	initial={{opacity:customValue? 0:05}} //custom을 통해 받은 값으로 분기문 작성
	animate={{opacity:1}}
	exit={{opacity:0}}
	>
		hello
	</motion.div>}
	</AnimatePresence>
	<button onClick={onClick}>click</button>
</>
)
}
```

AnimatePresence를 사용하면 하위 태그에 exit를 props로 넣어서 컴포넌트가 사라질때 애니메이션을 실행 시킬수 있습니다.

### custom

custom은 AnimatePresence에서 받은 값을 하위 컴포넌트에 전달할수 있습니다. 이것을 통해 동적인 애니메이션을 만들수 있습니다.