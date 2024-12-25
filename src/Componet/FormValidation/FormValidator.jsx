export default function FormValidator(event) {
     let { name, value } = event.target
     switch (name) {
          case 'name':
               if (value.length === 0)
                    return name + ' field is mandatory'

               else if (value.length <= 3 || name.length >= 40)
                    return name + "Length Must Be 4 to 39 char "
               else
                    return ""


          default:
               return ""
     }
}