![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-kind-of-Webprojects?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-kind-of-Webprojects?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-kind-of-Webprojects?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-kind-of-Webprojects?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-kind-of-Webprojects?color=yellow&style=for-the-badge)


***
<img align="left" alt="HTML" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" /> 
<img align="left" alt="CSS" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="Sass Logo" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" /> 
<img align="left" alt="CSS" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />  

# &nbsp;- ALL KIND OF WEBPROJECTS - ✔

<img align="center" alt="Canvas Picture" src="https://miro.medium.com/max/860/1*M-7PkS5EnTOQIuAmfRKH6Q.png" /> <br>

Over here you're going to find all kind of webrpojects such as the small ones and the big ones done with HTML / CSS and JS! <br> These are an ideal opportunity to improve the coding skills for me a bit. Enjoy!
        
<br />
<br />

***
<img align="left" alt="W3Schools Logo" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" />

## &nbsp;Games and Fun to learn for free: ✅💫
***

* Be sure to check out these funny games to learn HTML, CSS and JS: https://codepip.com/games/ (membership for pro)

* Still some of the best tutorials for beginners: https://www.w3schools.com/ (sign up for tracked courses)

<br />
<br />

***
<img align="left" alt="Projects" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/MS_Project_Logo.png/480px-MS_Project_Logo.png" /> 

## &nbsp;Our Projects: ✅ 
***
| PROJECT | TITLE | CONTENT |
|:--------------| :--------------| :--------------|
|01| BIRTHDAY CARD | Animated Birthday Card for a friend (HTML, CSS) |
|02| RESPONSIVENESS | All about resonsive topics such as flexbox, grid, media queries, tables, navigations and sliders (HTML,CSS) |
|03| SCSS / SASS | A small onepager website to test the basic structures of SCSS / SASS, Mixins, Extend; Nesting, Devide and Conquer |


<br />
<br />

***
<img align="left" alt="Sass Logo" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" /> 

## &nbsp;SCSS / SASS: ✅ 
***
**Some Notes about SASS / SCSS:**
* SASS is a CSS preprocessor, which means that it extends the CSS language, adding features that allow variables, nested rules, mixins (*), inline imports, and more. It also helps to keep things organised and allows you to create style sheets faster.
* SASS is completely compatible with all versions of CSS but needs to be compiled into CSS before it can be used in a browser.

**What's the difference between SASS and SCSS?**
* SCSS still uses {} like:
```scss

$main-color: #ff0000;

h1 {
  color: $main-color;
}
```
...while SASS uses indentation without {} as Python does like:
```scss
$main-color: #ff0000;

h1 
  color: $main-color;

```

**MIXINS:**
* Mixins are a way to reuse styles. They are similar to functions in that they take arguments and return a value. They are different in that they are not limited to returning a single value. They can also output multiple lines of CSS.

```scss
// Mixin example 1 without arguments
@mixin rightCorner() {
  position: absolute;
  bottom: 0;
  right: 35vw;
}

// Mixin example 2 with arguments
@mixin circle($size, $bgColor: #ff8a98) {
  width: $size;
  height: $size;
  background-color: $bgColor;
  border-radius: 50%;
}

// Class which uses the mixin 1 and 2
.circle {
  @include rightCorner();
  @include circle(600px); // $size = 600px. Order is crucial!
}
```

**EXTEND:**
* Extend is a way to share a set of CSS properties from one selector / classes to another. It helps keep your Sass / Scss very DRY.

```scss

.button-main {
  @extend .button; // extend the .button class (Additionally receive all basic values from .button)
  background-color: $main-color;
  margin-right: 10px;
}

```




**How to start:**
1) Go to Extensions in VSC and search for "Live Sass Compiler" and install it (optionally as well as SASS Syntax Highlighting)
  1.1) create a css folder and a scss folder with the same name + link your css file to your html file
2) Create a new folder and name it "scss" (or whatever you want)
2) Then go to the bottom right corner and click on "Watch Sass" and you're good to go (generates a .map file as well which has a function to map the compiled CSS to the source code)

**How to continue:**

* SCSS is "super" and stronger than CSS, which means all the changes you make in like "style.SCSS" will be compiled into "style.CSS" and will be applied to your website. It does everything automatically for you.

<br />
<br />

***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 0 | 0 | 0 |