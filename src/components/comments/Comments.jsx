import React from "react";
import Giscus from "@giscus/react";

const Comments = () => {
  return (
    <div className="giscus">
      <Giscus
        repo="NidhiSharma63/my-portfolio"
        repoId="R_kgDOH4q2Hg"
        category="General"
        categoryId="DIC_kwDOH4q2Hs4CTwBu"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="light"
      ></Giscus>
    </div>
  );
};

export default Comments;
