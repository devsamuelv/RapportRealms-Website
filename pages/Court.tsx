import React from "react";
import { PageBase } from "../ui/Base/PageBase";
import { DateBase } from "../ui/Court/DateBase";
import { DateElement } from "../ui/Court/DateElement";
import { Title } from "../ui/Title/Title";

export default class Court extends React.Component {
  render() {
    return (
      <PageBase>
        <div className="mb-3">
          <Title size="text-4xl" text="Court Dates" center={true} />
        </div>

        <DateBase>
          <DateElement
            name="EK"
            offence="Spamming"
            date="Wendsday"
            img="data:image/jpeg;base64,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"
          />
        </DateBase>
      </PageBase>
    );
  }
}
