--vars
title: 'Calert | Options'
--

# Options List

- calert(options?)

| options         | types                                                | default | description                    |
| --------------- | ---------------------------------------------------- | ------- | ------------------------------ |
| text            | string? \| object?                                   | ''      | text for alert                 |
| title           | string? \| object?                                   | ''      | title for alert                |
| cancelButton    | boolean? \| string?                                  | null    | add a confirm buttons          |
| confirmButton   | boolean? \| string?                                  | true    | add a confirm buttons          |
| backdropClick   | boolean?                                             | true    | If the outside is clickable    |
| timer           | number?                                              | null    | add a custom buttons           |
| iconPosition    | left \| right \| center                              | center  | change the position of icon    |
| buttonsPosition | left \| right \| center                              | center  | change the position of buttons |
| contentPosition | left \| right \| center                              | center  | change the position of content |
| inputs          | object?                                              | null    | add inputs                     |
| image           | object?                                              | null    | add image                      |
| backdrop        | object?                                              | null    | style the overlay              |
| modal           | object?                                              | null    | style the modal box            |
| buttons         | object?                                              | null    | add a custom buttons           |
| preConfirm      | Function?                                            | null    | callback before it popups      |
| title           | success? \| info? \| error? \| question? \| warning? | null    | add icons                      |
| form            | object?                                              | ''      | add attributes for forms       |
| footer          | string? \| object?                                   | ''      | add footer                     |
