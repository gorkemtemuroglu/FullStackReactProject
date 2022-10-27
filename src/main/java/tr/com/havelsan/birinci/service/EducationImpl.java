package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Education;
import tr.com.havelsan.birinci.models.EducationDTO;
import tr.com.havelsan.birinci.repository.EducationRepository;

import java.util.List;

@Service
public class EducationImpl implements EducationService{

    @Autowired
    EducationRepository educationRepository;


    @Override
    public Education saveEducation(EducationDTO educationDTO) {
        Education education = new Education();
        education.setSchool(educationDTO.getSchool());
        education.setUserId(educationDTO.getUserId());
        education.setSituation(educationDTO.getSituation());

        return educationRepository.save(education);
    }

    @Override
    public Education fetchEducationList(long id) {
        return educationRepository.findById(id);
    }

    @Override
    public List<Education> fetchAllEducationList(long id) {
        return educationRepository.findByUserId(id);
    }

    @Override
    public Education updateEducation(EducationDTO educationDTO) {
        Education education = educationRepository.findById(educationDTO.getId());
        education.setSituation(educationDTO.getSituation());
        education.setSchool(educationDTO.getSchool());


        return educationRepository.save(education);
    }

    @Override
    public void deleteEducationById(long personId) {
        Education education = educationRepository.findById(personId);
        educationRepository.delete(education);
    }
}
