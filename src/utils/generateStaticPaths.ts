import type { Chain } from "viem";
import * as chains from "viem/chains";

function createCaseInsensitiveObject(obj) {
  const lowerCaseObj = {};
  for (let key in obj) {
    lowerCaseObj[key.toLowerCase()] = obj[key];
  }
  return lowerCaseObj;
}

export const generateStaticPaths = () => {
  const chains2 = createCaseInsensitiveObject(chains);
  const langs = ["en", "zh"];
  const tokentypes = ["native", "erc20", "erc721", "erc1155"];
  const networks = Object.keys(chains2);
  const paths = [];

  for (let lang of langs) {
    for (let tokentype of tokentypes) {
      for (let network of networks) {
        paths.push({ params: { network, tokentype, lang } });
      }
    }
  }
  return paths;
};

export const generateDefaultStaticPaths = () => {
  const chains2 = createCaseInsensitiveObject(chains);

  const tokentypes = ["native", "erc20", "erc721", "erc1155"];
  const networks = Object.keys(chains2);
  const paths = [];

  for (let tokentype of tokentypes) {
    for (let network of networks) {
      paths.push({ params: { network, tokentype } });
    }
  }

  return paths;
};

export const generateLandingPageStaticPaths = () => {
  const langs = ["en", "zh"];

  const paths = [];

  for (let lang of langs) {
    paths.push({ params: { lang } });
  }
  return paths;
};
