import { NextRouter } from "next/router";

export const switchPage = (link: string, router: NextRouter) => {
    router.push({ pathname: link }, undefined, {
      shallow: true,
    });
  };

export const isPathActive = (path: string, isParent: boolean, router: NextRouter) => {
  if (isParent) return router.asPath.includes(path);
  return router.asPath.endsWith(path);
};

export const a ='a'