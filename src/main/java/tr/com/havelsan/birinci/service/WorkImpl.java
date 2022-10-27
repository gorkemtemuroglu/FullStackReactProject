package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Work;
import tr.com.havelsan.birinci.models.WorkDTO;
import tr.com.havelsan.birinci.repository.WorkRepository;

import java.util.List;

@Service
public class WorkImpl implements WorkService {

    @Autowired
    WorkRepository workRepository;


    @Override
    public Work saveWork(WorkDTO workDTO) {
        Work work = new Work();
        work.setWork_name(workDTO.getWork_name());
        work.setUserId(workDTO.getUserId());
        work.setSalary(workDTO.getSalary());

        return workRepository.save(work);
    }

    @Override
    public Work fetchWorkist(long id) {
        return workRepository.findById(id);
    }

    @Override
    public List<Work> fetchAllWorkList(long id) {
        return workRepository.findByUserId(id);
    }

    @Override
    public Work updateWork(WorkDTO workDTO) {
        Work work = workRepository.findById(workDTO.getId());
        work.setSalary(workDTO.getSalary());
        work.setWork_name(workDTO.getWork_name());


        return workRepository.save(work);
    }

    @Override
    public void deleteWorkById(long personId) {
        Work work = workRepository.findById(personId);
        workRepository.delete(work);
    }
}
