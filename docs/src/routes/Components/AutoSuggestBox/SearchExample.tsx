import * as React from "react";

import AutoSuggestBox from "react-uwp/AutoSuggestBox";

export default class SearchExample extends React.Component<{}, void> {
  render() {
    return (
      <AutoSuggestBox
        defaultValue="Color"
        searchAction={(value: string) => alert(value)}
      />
    );
  }
}
