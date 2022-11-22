# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashannotationdropdown

"""
    ''_dashannotationdropdown(;kwargs...)

A DashAnnotationDropdown component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (Array; optional): The data for the annotation dropdown as a dictionary
"""
function ''_dashannotationdropdown(; kwargs...)
        available_props = Symbol[:id, :data]
        wild_props = Symbol[]
        return Component("''_dashannotationdropdown", "DashAnnotationDropdown", "dash_annotation_dropdown", available_props, wild_props; kwargs...)
end

