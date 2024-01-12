import React from "react";
import './rules.css';
import { Button } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";

export const Rules = () => {
  const navigateToSubmitLineup = useNavigateToSubmitLineup();

  return (
    <>
      <div className="rules-wrapper">
        <h3>Rules</h3>
        <pre>
          The team with the most points at the end of playoffs will be the winner. <br/>
          Starting the same player back-to-back weeks will increase their scoring multiplier by 1 <br/><br/>
          For example: <br/>
            WR1: <br/>
            Wildcard: Hill 10pts<br />
            Divisional: Hill 11pts<br />
            Conference: Hill 12pts<br />
            Super Bowl: Lamb 13pts<br />
            Will get 10 + (11 x 2) + (12 x 3) + 13 = 81 points at the WR1 position <br />
            <br />
            You can start a player who is on bye and multipliers will still go in effect: <br />
            QB: <br/>
            Wildcard: Purdy (bye)<br />
            Divisional: Purdy 21pts<br />
            Conference: Dak 22pts<br />
            Super Bowl: Dak 23pts<br />
            Will get 0 + (21 x 2) + 22 + (23 x 2) = 110 points at the QB position <br />
            <br/>
            Starting the same player all 4 weeks will be a x4 multiplier in the super bowl
        </pre>
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