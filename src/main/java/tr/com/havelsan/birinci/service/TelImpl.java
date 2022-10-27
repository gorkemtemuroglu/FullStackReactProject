package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Tel;
import tr.com.havelsan.birinci.models.TelDTO;
import tr.com.havelsan.birinci.repository.TelRepository;

import java.util.List;

@Service
public class TelImpl implements TelService {

    @Autowired
    TelRepository telRepository;


    @Override
    public Tel saveTel(TelDTO telDTO) {
        Tel tel = new Tel();
        tel.setTel(telDTO.getTel());
        tel.setUserId(telDTO.getUserId());

        return  telRepository.save(tel);
    }

    @Override
    public Tel fetchTelList(long id) {
        return telRepository.findById(id);
    }

    @Override
    public List<Tel> fetchPersonTelList(long id) {
        return telRepository.findByUserId(id);
    }

    @Override
    public Tel updateTel(TelDTO telDTO) {
        Tel tel = telRepository.findById(telDTO.getId());
        tel.setTel(telDTO.getTel());

        return telRepository.save(tel);

    }

    @Override
    public void deleteTelById(long personId) {
        Tel tel = telRepository.findById(personId);
        telRepository.delete(tel);

    }
}
