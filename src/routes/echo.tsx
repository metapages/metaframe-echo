import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useMetaframe, useHashParamBoolean } from "@metapages/metaframe-hook";
import { MetaframeInputMap } from "@metapages/metapage";

export const Route: FunctionalComponent = () => {
  // This is currently the most performant way to get metaframe
  // inputs and cleanup properly
  const metaframeObject = useMetaframe();
  const [inputs, setInputs] = useState<MetaframeInputMap | undefined>();
  const [debug] = useHashParamBoolean("debug");

  // listen to inputs and cleanup up listener
  useEffect(() => {
    if (!metaframeObject?.metaframe) {
      return;
    }
    const metaframe = metaframeObject.metaframe;
    const onInputs = (newinputs: MetaframeInputMap): void => {
      setInputs(newinputs);
      metaframe.setOutputs(newinputs);
    };
    const disposer = metaframe.onInputs(onInputs);

    return () => {
      // If the metaframe is cleaned up, also remove the inputs listener
      disposer();
    };
  }, [metaframeObject.metaframe, setInputs]);

  return (
    <div>
      <a href="https://github.com/metapages/metaframe-echo/tree/main/public">
        Help
      </a>
      <br />
      {debug ? (inputs ? JSON.stringify(inputs) : "No inputs yet") : null}
    </div>
  );
};
