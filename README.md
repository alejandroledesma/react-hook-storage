
[![npm version](https://img.shields.io/npm/v/react-hook-storage.svg?style=popout-square)](https://www.npmjs.com/package/react-hook-storage)
[![npm downloads](https://img.shields.io/npm/dm/react-hook-storage.svg?style=popout-square)](https://www.npmjs.com/package/react-hook-storage)
[![GitHub stars](https://img.shields.io/github/stars/waavi/react-hook-storage.svg?style=popout-square)](https://github.com/waavi/react-hook-storage)
![Travis](https://travis-ci.com/Waavi/react-hook-storage.svg?token=Q9Sz1pTvqBgPz1SyHLk1&branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Waavi/react-hook-storage/badge.svg?branch=master)](https://coveralls.io/github/Waavi/react-hook-storage?branch=master)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)](https://github.com/waavi/react-hook-storage/raw/master/license.txt)

<br>

## Introduction

React hook for manage the localStorage and sessionStorage.

## Install

  ``` bash
  npm install react-hook-storage --save
  ```
  or
  ``` bash
  yarn add react-hook-storage
  ```

## Install

  ``` js
  import ReactStorage from 'react-hook-storage'

  const storage = new ReactStorage({
    key: 'app:0.0.1', // default is 'react-hook-storage'
    storage: 'local', // Select session|local storage. By default it's 'local'
  })

  export default storage
  ```

## Usage

  ```js
  import React from 'react';
  import { useStorage } from 'storage'

  function StateCounter() {
    const [count, setCount] = useStorage(0);

    return (
      <>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </>
    );
  }
```