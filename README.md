# Flow MD

This takes in a markdown document of a particular format and transforms it into a flowchart or Choose-Your-Own-Adventure format. This can also allow authoring of content.

## Library

The library has a self-contained Redux store that can parse markdown files (thanks to [unified](TODO)) and transform into the models expected by the application. It also will handle the rendering of these models for you. However, there are a variety of levers you can use in order to generate a look-and-feel that is all your own.

| Parameter             | Type              | Description |
| ---------             | ----              | ----------- |
| **styles**            | Styles            | control the stylistic aspects of the application (color, font families, and more). |
| **componentFactory**  | FactoryFunction   | override any of the components used in the application to be custom versions. This is commonly used for rendering Result components. |
| **allowedOptions**    | Option[]          | The options you want to be visible in the interface. |
| **file**              | File              | If provided, automatically loads the specified files |
| **onSave**            | File              | If authoring content is allowed, what to do with the created file |

## Application

To use Flow MD, you can 