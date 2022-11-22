# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashAnnotationDropdown <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAnnotationDropdown',
        namespace = 'dash_annotation_dropdown',
        propNames = c('id', 'data'),
        package = 'dashAnnotationDropdown'
        )

    structure(component, class = c('dash_component', 'list'))
}
