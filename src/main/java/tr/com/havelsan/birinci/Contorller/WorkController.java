package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Education;
import tr.com.havelsan.birinci.entity.Work;
import tr.com.havelsan.birinci.models.WorkDTO;
import tr.com.havelsan.birinci.service.WorkService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class WorkController {

    @Autowired
    WorkService workService;

    @GetMapping("/works/{user_id}")
    public String getWorkList(@PathVariable Long user_id ){
        return "You acces the Adress list which user id's is : "+user_id;
    }

    @PostMapping("/work")
    public Work createWorks(@RequestBody WorkDTO workDTO){

        return workService.saveWork(workDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/work/person/{id}")
    public List<Work> getAllWorks(@PathVariable long id) {
        return workService.fetchAllWorkList(id);
    }

    @GetMapping("/work/{id}")
    public Work getWork(@PathVariable long id ){
        return workService.fetchWorkist(id);
    }

    @PutMapping("/work")
    public Work updateWork(@RequestBody WorkDTO workDTO){
        return workService.updateWork(workDTO);
    }

    @DeleteMapping("/work/{id}")
    public String deleteWork(@PathVariable long id) {

      workService.deleteWorkById(id);
        return "You deleted the work which id is : " +id;
    }
}
