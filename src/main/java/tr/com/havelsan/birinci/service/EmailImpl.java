package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Email;
import tr.com.havelsan.birinci.models.EmailDTO;
import tr.com.havelsan.birinci.repository.EmailRepository;

import java.util.List;

@Service
public class EmailImpl implements EmailService {

    @Autowired
    EmailRepository emailRepository;


    @Override
    public Email saveEmail(EmailDTO emailDTO) {
        Email email = new Email();
        email.setEmail(emailDTO.getEmail());
        email.setUserId(emailDTO.getUserId());
        return  emailRepository.save(email);
    }

    @Override
    public Email fetchEmailList(long id) {
        return emailRepository.findById(id);
    }

    @Override
    public List<Email> fetchAllEmailList(long id) {
        return emailRepository.findByUserId(id);
    }


    @Override
    public Email updateEmail(EmailDTO emailDTO) {
        Email email = emailRepository.findById(emailDTO.getId());
        email.setEmail(emailDTO.getEmail());


        return emailRepository.save(email);
    }

    @Override
    public void deleteEmailById(long personId) {
        Email email = emailRepository.findById(personId);
        emailRepository.delete(email);

    }
}
