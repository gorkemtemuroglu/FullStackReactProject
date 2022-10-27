package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Hobi;
import tr.com.havelsan.birinci.models.HobiDTO;
import tr.com.havelsan.birinci.repository.HobiRepository;

import java.util.List;

@Service
public class HobiImpl implements HobiService {

    @Autowired
    HobiRepository hobiRepository;

    @Override
    public Hobi saveHobi(HobiDTO hobiDTO) {
        Hobi hobi = new Hobi();
        hobi.setHobi(hobiDTO.getHobi());
        hobi.setUserId(hobiDTO.getUserId());

        return  hobiRepository.save(hobi);
    }

    @Override
    public Hobi fetchHobiList(long id) {
        return hobiRepository.findById(id);
    }

    @Override
    public List<Hobi> fetchAllHobiList(long id) {
        return hobiRepository.findByUserId(id);
    }

    @Override
    public Hobi updateHobi(HobiDTO hobiDTO) {
        Hobi hobi = hobiRepository.findById(hobiDTO.getId());
        hobi.setHobi(hobiDTO.getHobi());

        return hobiRepository.save(hobi);
    }

    @Override
    public void deleteHobiById(long personId) {
        Hobi hobi = hobiRepository.findById(personId);
        hobiRepository.delete(hobi);
    }
}
