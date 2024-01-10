import React from "react";
import './rules.css';
import { Button } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";

export const Rules = () => {
  const navigateToSubmitLineup = useNavigateToSubmitLineup();

  return (
    <>
      <div className="rules-wrapper">
        <h3>Scoring</h3>
        <fieldset className="scoring-wrapper">
          <h4>Passing</h4>
          <pre>
            Passing Yard:        .04<br/>
            Passing TD:            4<br/>
            2-Pt Conversion:       2<br/>
            Interception:         -1<br/>
          </pre>
          <h4>Rushing</h4>
          <pre>
            Rushing Yard:         .1<br/>
            Rushing TD:            6<br/>
            2-Pt Conversion:       2<br/>
          </pre>
          <h4>Receiving</h4>
          <pre>
            Reception:            .5<br/>
            Receiving Yard:       .1<br/>
            Receiving TD:          6<br/>
            2-Pt Conversion:       2<br/>
          </pre>
          <h4>D/ST</h4>
          <pre>
            D/ST TD:               6<br/>
            Points Allowed 0      10<br/>
            Points Allowed 1-6     7<br/>
            Points Allowed 7-13    4<br/>
            Points Allowed 14-20   1<br/>
            Points Allowed 21-27   0<br/>
            Points Allowed 28-34  -1<br/>
            Points Allowed 35+    -4<br/>
            Sack:                  1<br/>
            Interception:          2<br/>
            Fumble Recovery:       2<br/>
            Safety:                2<br/>
            Blocked Kick:          2<br/>
          </pre>
          <h4>Kicking</h4>
          <pre>
            FG Made (0-39 yards):  3<br/>
            FG Made (40-49 yards): 4<br/>
            FG Made (50-59 yards): 5<br/>
            FG Made (60-69 yards): 6<br/>
            PAT Made:              1<br/>
          </pre>
          <h4>Misc</h4>
          <pre>
            Fumble Lost:          -2<br/>
            Fumble Recovery TD:    6<br/>
          </pre>
        </fieldset>
        <Button onClick={navigateToSubmitLineup}>Back</Button>
      </div>
    </>
  );
}