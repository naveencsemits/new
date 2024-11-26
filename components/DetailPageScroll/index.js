import React, { useEffect } from "react";

// export const dartPalettes = [
//     {
//         layer1: '#0a2463',
//         layer2: '#3e92cc',
//         layer3: '#fffaff',
//         layer4: '#d8315b',
//     },
//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#00ADB5',
//         layer4: '#EEEEEE',
//     },
//     {
//         layer1: '#100720',
//         layer2: '#31087B',
//         layer3: '#FA2FB5',
//         layer4: '#FFC23C',
//     },
// ]

// const litePalettes = [
//     {
//         layer1: '#F8F6F6',
//         layer2: '#F5D061',
//         layer3: '#2A363B',
//         layer4: '#CF4647',
//     },

//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#00ADB5',
//         layer4: '#EEEEEE',
//     },
//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#EEEEEE',
//         layer4: '#00ADB5',
//     },
//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#00ADB5',
//         layer4: '#EEEEEE',
//     },
//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#FFD369',
//         layer4: '#EEEEEE',
//     },
//     {
//         layer1: '#222831',
//         layer2: '#EEEEEE',
//         layer3: '#00ADB5',
//         layer4: '#393E46', // sss
//     },
//     {
//         layer1: '#222831',
//         layer2: '#393E46',
//         layer3: '#00ADB5',
//         layer4: '#EEEEEE', // sss
//     },
//     {
//         layer1: '#F8F8F8',
//         layer2: '#434343',
//         layer3: '#FAEBCD',
//         layer4: '#F7C873',
//     },
//     {
//         layer1: '#F8F6F6',
//         layer2: '#F5D061',
//         layer3: '#2A363B',
//         layer4: '#CF4647',
//     },
// ];

export const dartPalettes = [
  {
    layer1: "#b9c9bc",
    layer2: "#c6c4c5",
    layer3: "#657268",
    layer4: "#94a6be",
  },
  {
    layer1: "#424652",
    layer2: "#4d4f4e",
    layer3: "#b9c9bc",
    layer4: "#c6c4c5",
  },
  {
    layer1: "#657268",
    layer2: "#94a6be",
    layer3: "#424652",
    layer4: "#4d4f4e",
  },
  {
    layer1: "#b9c9bc",
    layer2: "#657268",
    layer3: "#94a6be",
    layer4: "#4d4f4e",
  },
];

const litePalettes = [
  {
    layer1: "#b9c9bc",
    layer2: "#c6c4c5",
    layer3: "#657268",
    layer4: "#94a6be",
  },
  {
    layer1: "#424652",
    layer2: "#4d4f4e",
    layer3: "#b9c9bc",
    layer4: "#c6c4c5",
  },
  {
    layer1: "#657268",
    layer2: "#94a6be",
    layer3: "#424652",
    layer4: "#4d4f4e",
  },
  {
    layer1: "#b9c9bc",
    layer2: "#657268",
    layer3: "#94a6be",
    layer4: "#4d4f4e",
  },
  {
    layer1: "#424652",
    layer2: "#4d4f4e",
    layer3: "#b9c9bc",
    layer4: "#94a6be",
  },
  {
    layer1: "#657268",
    layer2: "#94a6be",
    layer3: "#424652",
    layer4: "#4d4f4e",
  },
  {
    layer1: "#b9c9bc",
    layer2: "#c6c4c5",
    layer3: "#94a6be",
    layer4: "#424652",
  },
  {
    layer1: "#424652",
    layer2: "#657268",
    layer3: "#b9c9bc",
    layer4: "#4d4f4e",
  },
  {
    layer1: "#c6c4c5",
    layer2: "#b9c9bc",
    layer3: "#424652",
    layer4: "#657268",
  },
];

export const getPelettes = () => {
  return litePalettes;
};

function DetailPageScroll() {
  useEffect(() => {
    window.addEventListener("scroll", scrollColor);
    scrollColor();
  }, []);

  const changeColors = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--themeColor1", color.layer1);
    root.style.setProperty("--themeColor2", color.layer2);
    root.style.setProperty("--themeColor3", color.layer3);
    root.style.setProperty("--themeColor4", color.layer4);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta?.setAttribute && meta?.content !== color.layer2) {
      meta.setAttribute("content", color.layer2);
    }
  };

  const getColorIndex = () => {
    const height = window.innerHeight;
    const currentLocation = window.pageYOffset;
    const scrollPosition = currentLocation + height / 2;
    const views = document.getElementsByClassName("view-element");
    console.log("sdsd", views);
    let index = 0;
    if (!views) return index;
    if (scrollPosition < views[0].scrollHeight) return index;
    for (let i = 0; i < views.length; i++) {
      console.log("i count", i);
      const current = views[i];
      const after = views[i + 1];
      console.log("current after");
      console.log(current, after);
      if (!after) {
        index = i;
        break;
      }
      if (
        scrollPosition > current.offsetTop &&
        scrollPosition < after?.offsetTop
      ) {
        index = i;
        break;
      }
    }
    return index;
  };

  const scrollColor = () => {
    const index = getColorIndex();
    const pelettes = getPelettes();
    console.log("pallets", pelettes);
    // changeColors(pelettes[index]||pelettes[4])
    changeColors(pelettes[4]);
  };

  return <div />;
}

export default DetailPageScroll;
