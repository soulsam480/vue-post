# vue-post

A Vuejs plugin to send HTML form action `POST` requests from Javascript or from any HTML element!

**INFO:** [![Maintainability](https://api.codeclimate.com/v1/badges/52cb5804fcac30538c35/maintainability)](https://codeclimate.com/github/soulsam480/vue-post/maintainability)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/soulsam480/ecom-cms/blob/master/LICENSE.md)
[![NPM](https://img.shields.io/npm/v/vue-post)](https://www.npmjs.com/package/vue-post)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4675e03e44cc4d4ea4f3d38e2bfd61d0)](https://www.codacy.com/manual/soulsam480/vue-post?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=soulsam480/vue-post&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/f5d2b1b9-8709-4af7-a50f-286cd7370a71)](https://codebeat.co/projects/github-com-soulsam480-vue-post-master)

**Table of Contents**
- [vue-post](#vue-post)
  - [Features](#features)
  - [Compatibility](#compatibility)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Steps](#steps)
      - [From Instance Method](#from-instance-method)
      - [From HTML Element](#from-html-element)
  - [Notes](#notes)

## Features

- Send HTML form action `POST` request from vue instance method.
- Send HTML form action `POST` request from any HTML element.

## Compatibility

- [Vuejs](https://vuejs.org) v2.0 and above

## Installation

From npm

```
npm install vue-post --save
```

## Usage

### Steps

import it

```javascript
import vuePost from "vue-post"
```

Use as a plugin

```javascript
Vue.use(vuePost)
```

After this we have access to global instance method `post` as `this.post` inside .vue files and global vue component `Post` inside .vue files.

#### From Instance Method

The instance method `post` takes 3 parameters.

- action: the action URL of your form 
- target: window of action (expected: _self, _blank)
- params: a json object of input values ([See Notes](#notes))

```
/*any_component.vue*/

<template>
<!-- your HTML markup -->
<button @click="run">Post Form</button>
</template>
<script>
export default{
    //other code
    methods:{
        run(){
            this.post({
				action: the action URL of your form ,
				target: window of action (expected: _self, _blank),
				params: a json object of input values
            })
        }
    }

}
</script>
```

#### From HTML Element

We have access to global component `Post` which is a HTML `a` tag. It requires a single prop `data` which is a json object. 
 
```
/*any_component.vue*/

<template>
<!-- your HTML markup -->
<Post :data="data"/>
</template>
<script>
export default{
    //other code
   data(){
   return{
   data:{
   	action: the action URL of your form ,
	target: window of action (expected: _self, _blank),
	params: a json object of input values
   }
}
}
</script>
```
## Notes

The `params` parameter is an json object which contains the values of the input fields which are to be built and submitted inside a HTML form.

For the below implementation
```javascript
this.post({
    action: "https://itatakimas.com",
    target:"_self",
    params:{
        NAME: "Zoro",
        EMAIL: "olo@olo.com",
    }
})
```
vue-post will build and submit the form as

```
<form action='https://itatakimas.com' target='_self' >
<input type='hidden' name='NAME' value='Zoro'/>
<input type='hidden' name='EMAIL' value='olo@olo.com'/>
</form>
```

For any help reach me 🕊[twitter](https://twitter.com/sambitsahoojs) / 📧[mail](mailto:soulsam480@hotmail.com)

Thank you! 


