import { StyledBodyContainer, StyledSubBodyContainer2 } from "../Styles/StyledBody";
import * as Constants from "../constants";
import { AccordionItemDirective, AccordionItemsDirective,} from "@syncfusion/ej2-react-navigations";
import { StyledAccordionComponent } from "../Styles/StyledAccordion";
import { StyledEditButton, StyledEditButtonContainer,StyledEditContainer, StyledEditInnerContainer} from "../Styles/StyledEditContainer";
import { StyledAccordionContainer, StyledAccordionMissingContainer,} from "../Styles/StyledAccordionContainer";
import { registerLicense } from "@syncfusion/ej2-base";
import { StyledRadioButtonContainer, StyledRadioButton, StyledSkillButtonContainer, StyledSkillContainer} from "../Styles/StyledRadioButton";
import { StyledTextAreaWrapper } from "../Styles/StyledTextArea";
import { StyledButtonComponent } from "../Styles/StyledButton";
import { TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import React, { useEffect, useState } from "react";

registerLicense(process.env.SYNCFUSION_KEY);

function Home() {

  const [text, setText] = useState("")
  const [highlightedWords, setHighlightsWords] = useState([""]);

  const saveHighlight = () => {
      setHighlightsWords(highlightedWords => [...highlightedWords, text]);
  };

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      const activeSelection = document.getSelection();
      const text = activeSelection.toString();
      setText(text);
    })
  }, [])

  const aspContent = () => {
    return (
      <div>
        Microsoft ASP.NET is a set of technologies in the Microsoft .NET
        Framework for building Web applications and XML Web services.
      </div>
    );
  };

  return (
    <StyledBodyContainer>
      <div>
        <StyledSkillContainer>
          <StyledRadioButtonContainer>
            <StyledRadioButton label="Skill 1" name="skill" />
            <StyledRadioButton label="Skill 2" name="skill" />
            <StyledRadioButton label="Skill 3" name="skill" />
            <StyledRadioButton label="Skill 4" name="skill" />
            <StyledRadioButton label="Skill 5" name="skill" />
          </StyledRadioButtonContainer>
          <StyledSkillButtonContainer>
            <StyledButtonComponent>Save</StyledButtonComponent>
          </StyledSkillButtonContainer>
        </StyledSkillContainer>

        <StyledTextAreaWrapper>
          <TextAreaComponent
            cssClass="e-bigger e-filled"
            placeholder="Student Writing Text"
            width="650"
            rows="14"
          />
        </StyledTextAreaWrapper>
      </div>

      <StyledSubBodyContainer2>
        <StyledAccordionContainer>
          <h2>Annotation</h2>

          <StyledAccordionComponent expandMode="Multiple" color={Constants.CAM}>
            <AccordionItemsDirective>
              <AccordionItemDirective
                expanded={false}
                header="ASP.NET"
                content={aspContent}
              />
              <AccordionItemDirective
                expanded={false}
                header="ASP.NET2"
                content={aspContent}
              />
            </AccordionItemsDirective>
          </StyledAccordionComponent>
          <StyledAccordionMissingContainer>
            <h3>Missing</h3>

            <StyledAccordionComponent
              expandMode="Multiple"
              color={Constants.CAM}
            >
              <AccordionItemsDirective>
                <AccordionItemDirective
                  expanded={false}
                  header="ASP.NET3"
                  content={aspContent}
                />
                <AccordionItemDirective
                  expanded={false}
                  header="ASP.NET4"
                  content={aspContent}
                />
              </AccordionItemsDirective>
            </StyledAccordionComponent>
          </StyledAccordionMissingContainer>
        </StyledAccordionContainer>

        <StyledEditContainer>
          <h2>Edit</h2>
          <StyledEditInnerContainer>
            <StyledEditButtonContainer color={Constants.GREEN}>
              <h6>Add</h6>
              <StyledEditButton
                onClick={saveHighlight}
                isToggle={true}
                iconCss="e-icons e-edit-2"
              ></StyledEditButton>
            </StyledEditButtonContainer>
            <StyledEditButtonContainer color={Constants.RED}>
              <h6>Delete</h6>
              <StyledEditButton
                isToggle={true}
                iconCss="e-icons e-delete-2"
              ></StyledEditButton>
            </StyledEditButtonContainer>
          </StyledEditInnerContainer>
        </StyledEditContainer>
      </StyledSubBodyContainer2>
    </StyledBodyContainer>
  );
}

export default Home;
