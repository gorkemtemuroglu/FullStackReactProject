package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Education;
import tr.com.havelsan.birinci.models.EducationDTO;
import tr.com.havelsan.birinci.service.EducationService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EducationController {

    @Autowired
    EducationService educationService;


    @GetMapping("/schools/{user_id}")
    public Education getSchoolList(@PathVariable Long user_id ){
        return educationService.fetchEducationList(user_id);
    }


    @PostMapping("/school")
    public Education createSchool(@RequestBody EducationDTO educationDTO){
        return educationService.saveEducation(educationDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/education/person/{id}")
    public List<Education> getAllEducation(@PathVariable long id) {
        return educationService.fetchAllEducationList(id);
    }



    @PutMapping("/school")
    public Education updateSchool(@RequestBody EducationDTO educationDTO){
        return educationService.updateEducation(educationDTO);
    }

    @DeleteMapping("/school/{id}")
    public String deleteSchool(@PathVariable long id) {
        educationService.deleteEducationById(id);
        return "You deleted the school which id is : " +id;
    }




}
