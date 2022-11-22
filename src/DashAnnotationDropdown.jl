
module DashAnnotationDropdown
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_dashannotationdropdown.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_annotation_dropdown",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashAnnotationDropdown.js",
    external_url = "https://unpkg.com/dash_annotation_dropdown@0.0.1/dash_annotation_dropdown/async-DashAnnotationDropdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashAnnotationDropdown.js.map",
    external_url = "https://unpkg.com/dash_annotation_dropdown@0.0.1/dash_annotation_dropdown/async-DashAnnotationDropdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_annotation_dropdown.min.js",
    external_url = "https://unpkg.com/dash_annotation_dropdown@0.0.1/dash_annotation_dropdown/dash_annotation_dropdown.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_annotation_dropdown.min.js.map",
    external_url = "https://unpkg.com/dash_annotation_dropdown@0.0.1/dash_annotation_dropdown/dash_annotation_dropdown.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
